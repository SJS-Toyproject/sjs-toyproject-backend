import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAreaDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '천안', description: '새롭게 추가할 지구 이름' })
    name: string;
}