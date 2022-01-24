import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/comm/dto/base-response.dto";
import { BoardDto } from "./board.dto";

export class CreateBoardResponseDto extends BaseResponseDto {
    @ApiProperty()
    data: BoardDto;
}