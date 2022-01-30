import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/comm/dto/base-response.dto";
import { PostDto } from "./post.dto";

export class FindAllPostResponseDto extends BaseResponseDto {
    @ApiProperty({ type: [PostDto] })
    data: [PostDto];
}