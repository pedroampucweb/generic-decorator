import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import * as emoji from 'node-emoji';
import { ApiPaginateResponse } from './api-paginate-response.decorator';
import { AppService } from './app.service';
import { FindVideoByTitleDto } from './find-video.dto';
import { PaginatedDto } from './paginated.dto';
import { Video } from './video.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private logger: PinoLogger) {}

  // THIS METHOD HAS THE PINO LOGGER WITH THE EMOJI
  @Get('testEmoji')
  getHello(): string {
    console.log(emoji.get('gear'));
    //this.logger.logger.level = 'trace';
    this.logger.info(emoji.get('gear') + ' test string.....');
    return this.appService.getHello();
  }

  @Post('findByTitle')
  @ApiPaginateResponse(Video)
  async findByTitle(
    @Body() findVideoByTitleDto: FindVideoByTitleDto ): Promise<PaginatedDto<Video>> {
    if (findVideoByTitleDto.title) {
      const response = new PaginatedDto<Video>();
      response.cursorId = 'asadsasd';
      response.skip = 1;
      response.take = 10;
      response.title = findVideoByTitleDto.title;
      response.results = [
        Video.createVideoEntity(
          new Video(
            'example',
            'example',
            'example',
            'example',
            'example',
            'example',
            'example',
            0,
            0,
            0,
            'example',
            false,
            new Date(),
            new Date(),
          ),
        ),
      ];
      return response;
    } else {
      throw HttpCode(500);
    }
  }
}
