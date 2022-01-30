import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "src/board/entities/board.entity";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { Comment } from "./entities/comment.entity";

export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly CommentRepository: Repository<Comment>,
        @InjectRepository(Post)
        private readonly PostRepository: Repository<Post>,
        @InjectRepository(User)
        private readonly UserRepository: Repository<User>,
    ) { }

    async create(commentData: CreateCommentDto): Promise<Comment> {
        const { postId, userId, content } = commentData;
        const post = await this.PostRepository.findOne(postId);
        if (post == null) {
            throw new NotFoundException();
        }

        const user = await this.PostRepository.findOne(userId);
        if (user === undefined) {
            throw new NotFoundException();
        }

        const comment = this.CommentRepository.create({ post, user, content });
        return await this.CommentRepository.save(comment);
    }

    async update({ id, content }: UpdateCommentDto) {
        const newComment = await this.CommentRepository.findOne({ id: id })
        newComment.content = content;

        const updateComment = await this.CommentRepository.save(newComment);
        return updateComment;
    }

    async findCommentById(id: number): Promise<Comment[]> {
        const post = await this.PostRepository.findOne({ postId });
        const commentList = await this.CommentRepository.find({ post: post });
        return commentList;
    }

    async remove(id: number): Promise<void> {
        await this.CommentRepository.delete(id);
        return;
    }
}