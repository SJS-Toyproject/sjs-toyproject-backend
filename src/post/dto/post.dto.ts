import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";
import { CreatePostDto } from "./create-post.dto";

export class PostDto extends CreatePostDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1, description: '게시글 Id' })
    id: number;
}