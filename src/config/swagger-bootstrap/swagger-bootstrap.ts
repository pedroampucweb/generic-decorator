import { PaginatedDto } from '../../paginated.dto';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from '../config.interface';

const swaggerBootstrap = (
  swaggerConfig: SwaggerConfig,
  app: INestApplication,
): OpenAPIObject => {
  const options = new DocumentBuilder()
    .setTitle(swaggerConfig.title || 'Title Not Found')
    .setDescription(swaggerConfig.description || 'Description Not Found')
    .setVersion(swaggerConfig.version || '2.0')
    .build();

  const document = SwaggerModule.createDocument(
    app,
    options,
    //, { extraModels: [PaginatedDto],}
  );

  return document;
};
export { swaggerBootstrap };
