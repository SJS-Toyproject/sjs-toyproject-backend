import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { Comment } from "./entities/comment.entity";

export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRespository: Repository<Comment>
    ) { }

    async create(createCommentDto: CreateCommentDto): Promise<Comment> {
        const createComment = await this.commentRespository.save({
            content: createCommentDto.content
        });

        return createComment;
    }

    async update({ id, content }: UpdateCommentDto) {
        const newComment = await this.commentRespository.findOne({ id: id })
        newComment.content = content;

        const updateComment = await this.commentRespository.save(newComment);
        return updateComment;
    }

    async findCommentById(id: number) {
        const commentList = await this.commentRespository.find({ boardId: id });
        return commentList;
    }

    async remove(id: number) {
        await this.commentRespository.delete(id);
    }
}