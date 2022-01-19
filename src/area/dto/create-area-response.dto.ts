import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseDto } from 'src/comm/dto/base-response.dto';
import { AreaDto } from './area.dto';

export class CreateAreaResponseDto extends BaseResponseDto {
    @ApiProperty()
    data: AreaDto;
}
