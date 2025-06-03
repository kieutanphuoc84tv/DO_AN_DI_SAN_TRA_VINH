import { Injectable, OnModuleInit } from '@nestjs/common';
import { SitesService } from '../sites/sites.service';
import * as data from '../data/data.json';
import { DataJson } from '../interfaces/data-json.interface';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(private readonly sitesService: SitesService) {}

  async onModuleInit() {
    await this.seedDatabase();
  }

  private async seedDatabase() {
    const count = await this.sitesService.findAll();
    if (count.length === 0) {
      await this.sitesService.seedData((data as unknown as DataJson).sites);
      console.log('Database seeded successfully!');
    }
  }
}
