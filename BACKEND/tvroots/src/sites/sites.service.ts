/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Site } from './schemas/site.schema';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class SitesService {
  private readonly dataPath = path.join(process.cwd(), 'src', 'data', 'data.json');
  private cachedData: any = null;

  constructor(@InjectModel(Site.name) private siteModel: Model<Site>) {
    this.loadData();
  }

  private loadData() {
    if (!this.cachedData) {
      try {
        const rawData = fs.readFileSync(this.dataPath, 'utf8');
        this.cachedData = JSON.parse(rawData);
      } catch (error) {
        console.error('Lỗi khi đọc file data.json:', error);
      }
    }
    return this.cachedData;
  }

  async findAll(recognition?: string): Promise<Site[]> {
    if (recognition) {
      if (recognition === 'quocgia') {
        // Lọc di tích cấp quốc gia dựa vào đường dẫn hình ảnh
        return this.siteModel.find({
          image: { $regex: /ditichquocgia/i }
        }).exec();
      } else if (recognition === 'tinh') {
        // Lọc di tích cấp tỉnh chỉ dựa vào đường dẫn hình ảnh
        return this.siteModel.find({
          image: { $regex: /ditichcaptinh/i }
        }).exec();
      }
    }
    return this.siteModel.find().exec();
  }

  async findOne(id: string): Promise<Site | null> {
    const site = await this.siteModel.findOne({ id }).exec();
    if (!site) {
      throw new NotFoundException(`Không tìm thấy địa điểm với id ${id}`);
    }
    return site;
  }

  async search(query: string): Promise<Site[]> {
    const regex = new RegExp(query, 'i');
    return this.siteModel.find({
      $or: [
        { name: { $regex: regex } },
        { description: { $regex: regex } },
        { location: { $regex: regex } },
        { 'details.history': { $regex: regex } }
      ]
    }).exec();
  }

  async getLocations(): Promise<any[]> {
    const sites = await this.siteModel.find().exec();
    const locations = {};
    
    sites.forEach(site => {
      const location = site.location.split(',')[0].trim();
      if (!locations[location]) {
        locations[location] = [];
      }
      locations[location].push({
        id: site.id,
        name: site.name,
        image: site.image
      });
    });
    
    return Object.keys(locations).map(key => ({
      location: key,
      sites: locations[key],
      count: locations[key].length
    }));
  }

  async getStatistics(): Promise<any> {
    const data = this.loadData();
    return {
      quocgia: data.overview_quocgia.statistics,
      tinh: data.overview_tinh.statistics
    };
  }

  async getOverview(type: string = 'all'): Promise<any> {
    const data = this.loadData();
    
    if (type === 'quocgia') {
      return data.overview_quocgia;
    } else if (type === 'tinh') {
      return data.overview_tinh;
    } else {
      return {
        quocgia: data.overview_quocgia,
        tinh: data.overview_tinh
      };
    }
  }

  async seedData(sitesData: any[]): Promise<void> {
    await this.siteModel.deleteMany({});
    await this.siteModel.insertMany(sitesData);
  }

  async checkImages(): Promise<any> {
    const allSites = await this.siteModel.find().exec();
    const imageUrls = allSites.map(site => ({
      id: site.id,
      name: site.name,
      image: site.image,
      isQuocGia: site.image.includes('ditichquocgia'),
      isTinh: site.image.includes('ditichcaptinh')
    }));
    
    return {
      total: imageUrls.length,
      quocGia: imageUrls.filter(site => site.isQuocGia).length,
      tinh: imageUrls.filter(site => site.isTinh).length,
      other: imageUrls.filter(site => !site.isQuocGia && !site.isTinh).length,
      images: imageUrls
    };
  }

  async reseedData(): Promise<any> {
    try {
      // Lấy dữ liệu từ file data.json
      const sitesData = (await import('../data/data.json')).sites;
      
      // Xóa tất cả dữ liệu hiện tại
      await this.siteModel.deleteMany({});
      
      // Thêm lại dữ liệu từ file data.json
      await this.siteModel.insertMany(sitesData);
      
      // Kiểm tra lại dữ liệu sau khi seed
      const newData = await this.checkImages();
      
      return {
        success: true,
        message: 'Dữ liệu đã được cập nhật thành công',
        data: newData
      };
    } catch (error) {
      return {
        success: false,
        message: 'Có lỗi xảy ra khi cập nhật dữ liệu',
        error: error.message
      };
    }
  }
}
