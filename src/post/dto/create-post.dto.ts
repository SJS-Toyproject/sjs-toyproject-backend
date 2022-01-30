import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '안녕하세요, 첫 게시글 써봅니다.', description: '게시글 제목' })
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '많이들 애용해주세요.', description: '게시글 내용' })
    content: string;
}