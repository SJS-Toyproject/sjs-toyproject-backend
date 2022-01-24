import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/comm/dto/base-response.dto";
import { BoardDto } from "./board.dto";

export class FindAllBoardResponseDto extends BaseResponseDto {
    @ApiProperty({ type: [BoardDto] })
    data: [BoardDto];
}