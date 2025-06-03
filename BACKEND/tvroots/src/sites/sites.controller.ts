import { Controller, Get, Param, Query, Post } from '@nestjs/common';
import { SitesService } from './sites.service';

@Controller('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Get()
  findAll(@Query('recognition') recognition?: string) {
    return this.sitesService.findAll(recognition);
  }

  @Get('overview')
  getOverview(@Query('type') type: string = 'all') {
    return this.sitesService.getOverview(type);
  }

  @Get('search')
  search(@Query('query') query: string) {
    return this.sitesService.search(query);
  }

  @Get('locations')
  getLocations() {
    return this.sitesService.getLocations();
  }

  @Get('statistics')
  getStatistics() {
    return this.sitesService.getStatistics();
  }

  @Get('check-images')
  checkImages() {
    return this.sitesService.checkImages();
  }

  @Get('reseed')
  reseedData() {
    return this.sitesService.reseedData();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sitesService.findOne(id);
  }
}
