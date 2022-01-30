import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CommentController } from "./comment.controller";
import { CreateCommentResponseDto } from "./dto/create-comment-response.dto";
import { FindCommentResponseDto } from "./dto/find-comment-response.dto";

type SwaggerMethodDoc<T> = {
    [K in keyof T]: (description: string) => MethodDecorator;
};

export const ApiDocs: SwaggerMethodDoc<CommentController> = {
    create(summary) {
        return applyDecorators(
            ApiOperation({
                summary,
                description: '해당 게시글에 댓글을 추가합니다.'
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully created!!',
                type: CreateCommentResponseDto,
            }),
            ApiResponse({
                status: 403,
                description: 'Forbidden.',
            })
        );
    },
    update(summary) {
        return applyDecorators(
            ApiOperation({
                summary,
                description: '현재 댓글을 수정합니다.'
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully updated!!',
                type: CreateCommentResponseDto,
            }),
            ApiResponse({
                status: 403,
                description: 'Forbidden.',
            })
        );
    },
    findCommentById(summary) {
        return applyDecorators(
            ApiOperation({
                summary,
                description: 'board_id에 해당하는 댓글들을 가져옵니다.'
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully Find!!',
                type: FindCommentResponseDto,
            }),
            ApiResponse({
                status: 403,
                description: 'Forbidden.',
            })
        );
    },
    remove(summary) {
        return applyDecorators(
            ApiOperation({
                summary,
                description: '해당 댓글을 삭제합니다.'
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully Deleted!!',
            }),
            ApiResponse({
                status: 403,
                description: 'Forbidden.',
            })
        );
    },
};