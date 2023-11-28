import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DownloadImagemDto } from './dto/download-imagem.dto';
import { randomUUID } from 'crypto';
import { DownloadImagemService } from './cases/download.imagem.service';

@ApiTags('Imagem')
@Controller('imagem')
export class ImagemController {
  constructor(private readonly downloadImagemService: DownloadImagemService) {}

  @Post('/')
  create(@Body() createImagemDto: DownloadImagemDto): Promise<object> {
    return this.downloadImagemService.execute(
      createImagemDto.URL,
      `public`,
      `${randomUUID().toString().slice(0, 5)}.jpeg`,
    );
  }
}
