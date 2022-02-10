import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'FFA API 1.0',
    description: 'FFA Swagger API Docs',
    version: '2.1.90',
    tags: ['videos'],
    path: 'api',
  },
};
export default (): Config => config;
