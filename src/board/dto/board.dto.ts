import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";
import { CreateBoardDto } from "./create-board.dto";

export class BoardDto extends CreateBoardDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1, description: '게시글 Id' })
    id: number;
}