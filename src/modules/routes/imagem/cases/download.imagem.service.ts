import * as fs from 'fs';
import axios from 'axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class DownloadImagemService {
  constructor() {}
  private readonly logger = new Logger(DownloadImagemService.name);
  async execute(url: string, path: string, name: any): Promise<object> {
    try {
      fs.rm(`${path}/${name}`, () => {});
      const response = await axios.get(url, { responseType: 'stream' });
      response.data.pipe(fs.createWriteStream(`${path}/${name}`));

      let status = false;

      await new Promise((resolve: any, reject: any) => {
        response.data.on('end', () => {
          resolve();
          // console.log(`Baixou: ${name}`);
          status = true;
        });

        response.data.on(
          'error',
          () => {
            // console.log(`Não Baixou: ${name}`);
            reject();
            status = false;
          },
          200,
        );
      });

      return { status, imagem: name };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
