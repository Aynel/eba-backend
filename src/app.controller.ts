import { Controller, Get } from '@nestjs/common';
import { AppService, Product } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Product[] {
    return this.appService.getHello();
  }
}
