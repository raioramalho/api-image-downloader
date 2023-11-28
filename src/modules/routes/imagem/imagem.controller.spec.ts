import { Test, TestingModule } from '@nestjs/testing';
import { ImagemController } from './imagem.controller';
import { DownloadImagemService } from './cases/download.imagem.service';
import { ImagemEntity } from 'src/context/imagem.entity';

describe('ImagemController', () => {
  let controller: ImagemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagemController],
      providers: [DownloadImagemService],
    }).compile();

    controller = module.get<ImagemController>(ImagemController);
  });

  it('Pode ser definido', () => {
    expect(controller).toBeDefined();
  });

  it('Deve baixar uma imagem', async () => {
    const request: ImagemEntity = await controller.create({
      URL: 'https://i.pinimg.com/564x/e0/c6/15/e0c6153b97b60a9ccb082b9768b27816.jpg',
    });
    expect(request.status).toBe(true);
  });
});
