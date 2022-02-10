import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { title } from 'process';
import { ApiPaginateResponse } from './api-paginate-response.decorator';
import { AppService } from './app.service';
import { FindVideoByTitleDto } from './create-video.dto';
import { PaginatedDto } from './paginated.dto';
import { Video } from './video.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
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
