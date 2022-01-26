import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '댓글 내용을 작성합니다.', description: '댓글 내용' })
    content: string;
}