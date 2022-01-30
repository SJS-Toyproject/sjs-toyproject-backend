import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HttpExceptionFilter } from "src/http.exception";
import { CommentController } from "./comment.controller";
import { CommentService } from "./comment.service";
import { Comment } from "./entities/comment.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Comment])],
    controllers: [CommentController],
    providers: [
        CommentService,
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        },
    ]
})
export class CommentModule { }