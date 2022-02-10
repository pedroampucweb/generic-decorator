import { Video } from './video.entity';
import { Type } from '@nestjs/common';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class PaginatedDto<TModel> {
  results: Video[];
  @ApiProperty({
    description: 'Must be empty on first call',
  })
  take: number | 10;
  @ApiProperty({
    description: 'Must be empty on first call',
  })
  skip: number | 0;
  @ApiProperty({
    description: 'Must be empty on first call',
  })
  cursorId: string | '';
  @ApiProperty({
    description: 'Must be empty on first call',
  })
  title: string | '';


  // @ApiProperty({ type: () => [TData] })
}
