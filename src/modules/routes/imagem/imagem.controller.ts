import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import ImagemService from './imagem.service';

@ApiTags('Imagem')
@Controller('imagem')
export class ImagemController {
  constructor(private readonly imagemService: ImagemService) {}

  // @Post('/')
  // create(@Body() createImagemDto: DownloadImagemDto) {}
}
