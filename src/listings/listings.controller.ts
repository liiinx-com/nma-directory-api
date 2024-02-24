import { Controller, Get } from '@nestjs/common';
import { listings } from './sample.data';

@Controller('listings')
export class ListingController {
  @Get()
  findAll() {
    return listings;
  }
}
