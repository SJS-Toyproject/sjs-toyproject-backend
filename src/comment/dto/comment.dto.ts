import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";
import { CreateCommentDto } from "./create-comment.dto";

export class CommentDto extends CreateCommentDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1, description: '댓글 Id' })
    id: number;
}