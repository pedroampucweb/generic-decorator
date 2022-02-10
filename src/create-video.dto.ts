import { ApiProperty } from "@nestjs/swagger";

export class FindVideoByTitleDto {
    @ApiProperty()
    title: string;
}