import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Aplicação')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHome(): string {
    return this.appService.getHome();
  }

  @Get('/hello')
  getHello(): any {
    return this.appService.getHello();
  }
}
