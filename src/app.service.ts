import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  getHome(): string {
    const site = `
    <!DOCTYPE html>
<html>
<head>
    <title>IMAGE DOWNLOADER - API</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .circle {
            width: 30px;
            height: 30px;
            background-color: green;
            border-radius: 50%;
            border: solid 1px white;
        }

        .text {
            color: white;
            font-size: 20px;
            margin-left: 20px;
        }

        .link {
            color: white;
            text-decoration: none;

            display: block;
        }

        .link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="circle"></div>
    <div class="text">Status: Online</div>
    <div class="text"><a href="/doc" class="link">Documentação.</div>
</body>
</html>

    `;

    try {
      return site;
    } catch (error) {
      this.logger.error(`Erro na obtenção de status: ${error.message}`);
      throw new HttpException(
        `Erro interno do serviço de status: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
