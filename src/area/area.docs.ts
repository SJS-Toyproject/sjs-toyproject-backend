import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { AreaController } from "./area.controller";
import { CreateAreaResponseDto } from "./dto/create-area-response.dto";

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
};