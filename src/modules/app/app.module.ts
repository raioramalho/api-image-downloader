import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ImagemModule } from '../routes/imagem/imagem.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), ImagemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
