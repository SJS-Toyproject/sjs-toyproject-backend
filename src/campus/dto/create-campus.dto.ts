import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCampusDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1, description: '지구 Id' })
    areaId: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '순천향대학교', description: '지구에 속해있는 대학교 이름' })
    name: string;
}