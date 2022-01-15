import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserController } from "./user.controller";


type SwaggerMethodDoc<T> = {
    [K in keyof T]: (description: string) => MethodDecorator;
};

export const ApiDocs: SwaggerMethodDoc<UserController> = {
    create(summary) {
        return applyDecorators(
            ApiOperation({
                summary,
                description: '새로운 사용자 추가 API',
            }),
            ApiResponse({
                status: 201,
                description: 'Successfully created!!',
                type: CreateUserDto,
            }),
            ApiResponse({
                status: 403,
                description: 'Forbidden.',
            })
        )
    },
};