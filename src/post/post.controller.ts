import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { HttpExceptionFilter } from "src/http.exception";
import { ApiDocs } from "./post.docs";
import { PostService } from "./post.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Controller('posts')
@ApiTags('posts')
@UseFilters(new HttpExceptionFilter())
export class PostController {
    constructor(
        private readonly boardService: PostService
    ) { }

    @Post()
    @ApiDocs.create('새로운 게시글 추가 API')
    create(@Body() createBoardDto: CreatePostDto) {
        return this.boardService.create(createBoardDto);
    }

    @Patch()
    @ApiDocs.update('게시글 제목/내용 수정 API')
    update(@Body() updateBoardDto: UpdatePostDto) {
        return this.boardService.update(updateBoardDto);
    }

    @Get()
    @ApiDocs.findAll('모든 게시글 목록 API')
    findAll() {
        return this.boardService.findAll();
    }

    @Delete(':id')
    @ApiDocs.remove('게시글 삭제 API')
    remove(@Param('id') id: number) {
        return this.boardService.remove(+id);
    }
}