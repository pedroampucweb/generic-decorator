//https://github.com/notiz-dev/nestjs-prisma-starter/blob/main/src/configs/config.ts

export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  swagger: SwaggerConfig;
}

export interface NestConfig {
  port: number;
}

export interface CorsConfig {
  enabled: boolean;
}

export interface SwaggerConfig {
  enabled: boolean;
  title: string;
  description: string;
  version: string;
  tags: string[];
  path: string;
}
