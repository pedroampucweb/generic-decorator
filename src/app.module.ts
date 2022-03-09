import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/config';
import { LoggerModule } from 'nestjs-pino';
import { stdSerializers } from 'pino-http';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        level: 'trace',
        serializers: stdSerializers.err,
        quietReqLogger: false,
        autoLogging: false,
        transport: {
          targets: [
            {
              target: 'pino/file',
              level: 'trace',
              options: {
                destination: './logs.log',
              },
            },
            {
              target: 'pino-pretty',
              level: 'trace',
              options: {
                colorize: true,
                levelFirst: true,
                destination: 1,
              },
            },
          ],
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
