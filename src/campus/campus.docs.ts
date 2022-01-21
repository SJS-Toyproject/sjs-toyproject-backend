import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CampusController } from "./campus.controller";
import { CreateCampusDto } from "./dto/create-area.dto";

type SwaggerMethodDoc<T> = {
    [K in keyof T]: (description: string) => MethodDecorator;
};

export const ApiDocs: SwaggerMethodDoc<CampusController> = {
    create(summary) {
        return applyDecorators(
            ApiOperation({
                summary,
                description: '새로운 지구를 추가합니다.'
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully created!!',
                type: CreateCampusDto,
            }),
            ApiResponse({
                status: 403,
                description: 'Forbidden.',
            })
        )
    },
    findAreaCampusById(summary) {
        return applyDecorators(
            ApiOperation({
                summary,
                description: '모든 지구의 이름을 가져옵니다.'
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully created!!',
            }),
            ApiResponse({
                status: 403,
                description: 'Forbidden.',
            })
        )
    },
    remove(summary) {
        return applyDecorators(
            ApiOperation({
                summary,
                description: '캠퍼스 이름을 삭제합니다.'
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully created!!',
            }),
            ApiResponse({
                status: 403,
                description: 'Forbidden.',
            })
        )
    }
};