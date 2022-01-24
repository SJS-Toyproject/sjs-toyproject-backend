import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { HttpExceptionFilter } from "src/http.exception";
import { ApiDocs } from "./board.docs";
import { BoardService } from "./board.service";
import { CreateBoardDto } from "./dto/create-board.dto";
import { UpdateBoardDto } from "./dto/update-board.dto";
import { Board } from "./entities/board.entity";

@Controller('boards')
@ApiTags('boards')
@UseFilters(new HttpExceptionFilter())
export class BoardController {
    constructor(
        private readonly boardService: BoardService
    ) { }

    @Post()
    @ApiDocs.create('새로운 게시글 추가 API')
    create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
        return this.boardService.create(createBoardDto);
    }

    @Patch()
    @ApiDocs.update('게시글 제목/내용 수정 API')
    update(@Body() updateBoardDto: UpdateBoardDto) {
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