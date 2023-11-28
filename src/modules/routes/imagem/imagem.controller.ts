import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DownloadImagemDto } from './dto/download-imagem.dto';
import { randomUUID } from 'crypto';
import { DownloadImagemService } from './cases/download.imagem.service';
import { ImagemEntity } from 'src/context/imagem.entity';

@ApiTags('Imagem')
@Controller('imagem')
export class ImagemController {
  constructor(private readonly downloadImagemService: DownloadImagemService) {}

  @Post('/')
  create(@Body() createImagemDto: DownloadImagemDto): Promise<ImagemEntity> {
    const nomeDaImagem = `${randomUUID().toString().slice(0, 5)}.jpeg`;
    return this.downloadImagemService.execute(
      createImagemDto.URL,
      `public`,
      nomeDaImagem,
    );
  }
}
