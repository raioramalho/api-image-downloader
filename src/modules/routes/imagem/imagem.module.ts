import { Module } from '@nestjs/common';

import { ImagemController } from './imagem.controller';
import { DownloadImagemService } from './cases/download.imagem.service';

@Module({
  controllers: [ImagemController],
  providers: [DownloadImagemService],
})
export class ImagemModule {}
