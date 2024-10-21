import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Task API')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth() // If you are using authentication with JWT or Bearer token
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const res = await app.listen(4004);
  if (res) console.log('App launch at port 4004');
}
bootstrap();
