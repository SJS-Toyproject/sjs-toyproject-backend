import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/comm/dto/base-response.dto";
import { PostDto } from "./post.dto";

export class CreatePostResponseDto extends BaseResponseDto {
    @ApiProperty()
    data: PostDto;
}