import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";
import { CreateCampusDto } from "./create-campus.dto";

export class CampusDto extends CreateCampusDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1, description: '캠퍼스의 고유 Id' })
    id: number;
}