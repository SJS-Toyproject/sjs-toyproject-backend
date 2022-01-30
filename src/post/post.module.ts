import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HttpExceptionFilter } from "src/http.exception";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";
import { Post } from "./entities/post.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Post])],
    controllers: [PostController],
    providers: [
        PostService,
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        },
    ]
})
export class PostModule { }