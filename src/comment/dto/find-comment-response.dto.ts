import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/comm/dto/base-response.dto";
import { CommentDto } from "./comment.dto";

export class FindCommentResponseDto extends BaseResponseDto {
    @ApiProperty({ type: [CommentDto] })
    data: [CommentDto];
}