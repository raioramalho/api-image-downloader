import { Module } from '@nestjs/common';

import { ImagemController } from './imagem.controller';
import { DownloadImagemService } from './cases/download.imagem.service';
import ImagemService from './cases/imagem.service';

@Module({
  controllers: [ImagemController],
  providers: [ImagemService, DownloadImagemService],
})
export class ImagemModule {}
