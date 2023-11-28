import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule.toString().toLocaleUpperCase(),
  );

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  const logger = new Logger(bootstrap.name);

  const config = new DocumentBuilder()
    .setTitle('Documentação Swagger - API-IMAGE-DOWNLOADER')
    .setDescription('Documentação de referência para a api image downloader')
    .setVersion('1.0.0.dev')
    .addTag('Aplicação')
    .addTag('Imagem')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document, {
    swaggerOptions: {
      displaySchemas: true,
    },
  });

  await app.listen(process.env.PORT, () => {
    console.clear();
    logger.verbose(
      `( ALAN RAMALHO -> [ http://${process.env.HOST}:${process.env.PORT} ] )`,
    );
    logger.verbose(
      `( AMBIENTE - ${process.env.AMBIENTE}] -> [ http://${process.env.HOST}:${process.env.PORT}/doc ] )`,
    );
  });
}
bootstrap();
