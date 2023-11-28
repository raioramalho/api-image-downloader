import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { DownloadImagemService } from './cases/download.imagem.service';
import { DownloadImagemDto } from './dto/download-imagem.dto';

@ApiTags('Imagem')
@Controller('imagem')
export class ImagemController {
  constructor(private readonly downloadImagemService: DownloadImagemService) {}

  @Post('/')
  create(@Body() createImagemDto: DownloadImagemDto): Promise<object> {
    const nomeDaImagem = `${randomUUID().toString().slice(0, 5)}.jpeg`;
    return this.downloadImagemService.execute(
      createImagemDto.URL,
      `public`,
      nomeDaImagem,
    );
  }
}
