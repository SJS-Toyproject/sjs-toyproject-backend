import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/comm/dto/base-response.dto";
import { CampusDto } from "./campus.dto";

export class FindCampusResponseDto extends BaseResponseDto {
    @ApiProperty({ type: [CampusDto] })
    data: [CampusDto];
}