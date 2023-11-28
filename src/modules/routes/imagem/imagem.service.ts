import * as fs from 'fs';
import axios from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class ImagemService {
  async download(url: string, path: string, name: any): Promise<boolean> {
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

      return status;
    } catch (error) {
      throw error;
    }
  }

  async findImage(caminhoArquivo): Promise<boolean> {
    try {
      await fs.accessSync(caminhoArquivo);
      return true;
    } catch (error) {
      return false;
    }
  }
}
