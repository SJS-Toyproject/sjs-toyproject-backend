import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Post } from "./entities/post.entity";

export class PostService {
    constructor(
        @InjectRepository(Post)
        private readonly boardRepository: Repository<Post>
    ) { }

    async create(createBoardDto: CreatePostDto): Promise<Post> {
        const createBoard = await this.boardRepository.save({
            title: createBoardDto.title,
            content: createBoardDto.content
        });

        return createBoard;
    }

    async update({ id, title, content }: UpdatePostDto) {
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