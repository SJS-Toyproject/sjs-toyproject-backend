import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { AreaController } from "./area.controller";
import { CreateAreaResponseDto } from "./dto/create-area-response.dto";
import { FindAllAreaDto } from "./dto/find-all-area-response.dto";

type SwaggerMethodDoc<T> = {
    [K in keyof T]: (description: string) => MethodDecorator;
};

export const ApiDocs: SwaggerMethodDoc<AreaController> = {
    create(summary) {
        return applyDecorators(
            ApiOperation({
                summary,
                description: '새로운 지구를 추가합니다.'
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully created!!',
                type: CreateAreaResponseDto,
            }),
            ApiResponse({
                status: 403,
                description: 'Forbidden.',
            })
        )
    },
    findAll(summary) {
        return applyDecorators(
            ApiOperation({
                summary,
                description: '모든 지구의 이름을 가져옵니다.'
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully created!!',
                type: FindAllAreaDto,
            }),
            ApiResponse({
                status: 403,
                description: 'Forbidden.',
            })
        )
    }
};