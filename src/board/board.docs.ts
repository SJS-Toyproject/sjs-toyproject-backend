import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { BoardController } from "./board.controller";
import { CreateBoardResponseDto } from "./dto/create-board-response.dto";
import { FindAllBoardResponseDto } from "./dto/find-all-board-response.dto";
import { UpdateBoardDto } from "./dto/update-board.dto";

type SwaggerMethodDoc<T> = {
    [K in keyof T]: (description: string) => MethodDecorator;
};

export const ApiDocs: SwaggerMethodDoc<BoardController> = {
    create(summary) {
        return applyDecorators(
            ApiOperation({
                summary,
                description: '새로운 캠퍼스를 특정 지구에 추가합니다.'
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully created!!',
                type: CreateBoardResponseDto,
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
                description: '캠퍼스 이름/지구를 수정합니다.'
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully updated!!',
                type: UpdateBoardDto,
            }),
            ApiResponse({
                status: 403,
                description: 'Forbidden.',
            })
        );
    },
    findAll(summary) {
        return applyDecorators(
            ApiOperation({
                summary,
                description: 'area_id로 입력한 지구에 속한 캠퍼스 목록을 가져옵니다.'
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully Find!!',
                type: FindAllBoardResponseDto,
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
                description: '캠퍼스 이름을 삭제합니다.'
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