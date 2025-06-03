import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SitesModule } from '../sites/sites.module';

@Module({
  imports: [SitesModule],
  providers: [SeedService],
})
export class SeedModule {}
