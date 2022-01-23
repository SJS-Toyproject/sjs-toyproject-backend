import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/comm/dto/base-response.dto";
import { CampusDto } from "./campus.dto";

export class CreateCampusResponseDto extends BaseResponseDto {
    @ApiProperty()
    data: CampusDto;
}