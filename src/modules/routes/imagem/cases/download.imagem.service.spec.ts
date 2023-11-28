import { Test, TestingModule } from '@nestjs/testing';
import { DownloadImagemService } from './download.imagem.service';
import { randomUUID } from 'crypto';

describe('DownloadImagemService', () => {
  let service: DownloadImagemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DownloadImagemService],
    }).compile();

    service = module.get<DownloadImagemService>(DownloadImagemService);
  });

  it('Deve ser denifido', () => {
    expect(service).toBeDefined();
  });

  it('Deve baixar uma imagem e salvar na pasta public', async () => {
    const imagem = {
      src: 'https://i.pinimg.com/564x/e0/c6/15/e0c6153b97b60a9ccb082b9768b27816.jpg',
      name: `${randomUUID().toString().slice(0, 5)}.jpeg`,
    };

    const download: any = await service.execute(
      imagem.src,
      'public',
      imagem.name,
    );

    expect(download.status).toBe(true);
  });
});
