import { Test, TestingModule } from '@nestjs/testing';
import ImagemService from './imagem.service';

describe('ImagemService', () => {
  let service: ImagemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagemService],
    }).compile();

    service = module.get<ImagemService>(ImagemService);
  });

  it('Deve ser denifido', () => {
    expect(service).toBeDefined();
  });

  it('Deve baixar uma imagem e salvar na pasta public', async () => {
    const imagem = {
      src: 'https://i.pinimg.com/564x/e0/c6/15/e0c6153b97b60a9ccb082b9768b27816.jpg',
      name: 'imagem-1.jpg',
    };

    const download = await service.download(imagem.src, 'public', imagem.name);

    expect(download).toBe(true);
  });

  it('Deve buscar uma imagem existente na pasta public', async () => {
    const imagem = {
      src: 'https://i.pinimg.com/564x/e0/c6/15/e0c6153b97b60a9ccb082b9768b27816.jpg',
      name: 'imagem-1.jpg',
    };

    const find = await service.findImage(`public/${imagem.name}`);

    expect(find).toBe(true);
  });
});
