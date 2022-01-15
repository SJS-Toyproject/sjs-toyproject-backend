import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'kakao', description: '사용자가 로그인한 SNS 타입' })
    social: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '1234567890', description: '사용자가 로그인한 SNS의 ID 값' })
    social_id: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '엄신영', description: '사용자 이름' })
    name: string;

    @IsString()
    @ApiProperty({ example: '010-1234-1234', description: '사용자 연락처' })
    phone: string;

    @IsNotEmpty()
    @ApiProperty({ example: '1994-10-21', description: '사용자 생일' })
    birthday: Date;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '나사렛 순장', description: '사용자 호칭' })
    position: string;

}