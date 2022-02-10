import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsConfig, NestConfig, SwaggerConfig } from './config/config.interface';
import { ConfigService } from '@nestjs/config';
import { swaggerBootstrap } from './config/swagger-bootstrap/swagger-bootstrap';
import { SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  //this.dotenv.config({ path: '/custom/path/to/.env' })
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  // SWAGGER SETUP
  if (configService.get<SwaggerConfig>('swagger').enabled) {
    const swaggerDoc = swaggerBootstrap(
      configService.get<SwaggerConfig>('swagger'),
      app,
    );
    SwaggerModule.setup(
      configService.get<SwaggerConfig>('swagger').path || 'iapi',
      app,
      swaggerDoc,
    );
  }

  // Cors
  if (configService.get<CorsConfig>('cors').enabled) {
    app.enableCors();
  }

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // start app
  await app.listen(configService.get<NestConfig>('nest').port || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
