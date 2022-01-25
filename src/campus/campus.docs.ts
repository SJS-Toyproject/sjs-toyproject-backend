import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CampusController } from "./campus.controller";
import { CreateCampusResponseDto } from "./dto/create-campus-response.dto";
import { FindCampusResponseDto } from "./dto/find-campus-response.dto";

type SwaggerMethodDoc<T> = {
    [K in keyof T]: (description: string) => MethodDecorator;
};

export const ApiDocs: SwaggerMethodDoc<CampusController> = {
    create(summary) {
        return applyDecorators(
            ApiOperation({
                summary,
                description: '새로운 캠퍼스를 특정 지구에 추가합니다.'
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully created!!',
                type: CreateCampusResponseDto,
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
                type: CreateCampusResponseDto,
            }),
            ApiResponse({
                status: 403,
                description: 'Forbidden.',
            })
        );
    },
    findAreaCampusById(summary) {
        return applyDecorators(
            ApiOperation({
                summary,
                description: 'area_id로 입력한 지구에 속한 캠퍼스 목록을 가져옵니다.'
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully Find!!',
                type: FindCampusResponseDto,
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