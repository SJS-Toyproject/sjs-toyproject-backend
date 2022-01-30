import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { HttpExceptionFilter } from "src/http.exception";
import { ApiDocs } from "./comment.docs";
import { CommentService } from "./comment.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { Comment } from "./entities/comment.entity";

@Controller('comments')
@ApiTags('comments')
@UseFilters(new HttpExceptionFilter())
export class CommentController {
    constructor(
        private readonly commentService: CommentService
    ) { }

    @Post()
    @ApiDocs.create('새로운 댓글 추가 API')
    create(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
        return this.commentService.create(createCommentDto);
    }

    @Patch()
    @ApiDocs.update('해당 댓글 수정 API')
    update(@Body() updateCommentDto: UpdateCommentDto) {
        return this.commentService.update(updateCommentDto);
    }

    @Get(':board_id')
    @ApiDocs.findCommentById('해당 게시글 댓글 목록 API')
    findCommentById(@Param('board_id') board_id: number) {
        return this.commentService.findCommentById(+board_id);
    }

    @Delete(':id')
    @ApiDocs.remove('해당 댓글 삭제')
    remove(@Param('id') id: number) {
        return this.commentService.remove(+id);
    }
}