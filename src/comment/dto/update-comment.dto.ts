import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateCommentDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1, description: '댓글 Id' })
    id: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '안녕하세요, 댓글을 달아봅니다.', description: '댓글 내용' })
    content: string;
}