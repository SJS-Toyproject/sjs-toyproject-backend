import { CreateAreaDto } from './create-area.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AreaDto extends CreateAreaDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: '1', description: '고유 아이디' })
    id: number;
}
