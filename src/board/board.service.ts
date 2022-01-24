import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateBoardDto } from "./dto/create-board.dto";
import { UpdateBoardDto } from "./dto/update-board.dto";
import { Board } from "./entities/board.entity";

export class BoardService {
    constructor(
        @InjectRepository(Board)
        private readonly boardRepository: Repository<Board>
    ) { }

    async create(createBoardDto: CreateBoardDto): Promise<Board> {
        const createBoard = await this.boardRepository.save({
            title: createBoardDto.title,
            content: createBoardDto.content
        });

        return createBoard;
    }

    async update({ id, title, content }: UpdateBoardDto) {
        const existingBoard = await this.boardRepository.findOne({ id: id });

        existingBoard.title = title;
        existingBoard.content = content;

        const updateBoard = await this.boardRepository.save(existingBoard);
        return updateBoard;
    }

    async findAll() {
        const boardList = await this.boardRepository
            .createQueryBuilder('boards')
            .getMany();

        return boardList;
    }

    async remove(id: number) {
        await this.boardRepository.delete(id);
    }
}