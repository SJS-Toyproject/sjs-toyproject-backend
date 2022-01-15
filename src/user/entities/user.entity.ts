import { ApiProperty } from "@nestjs/swagger";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty({ description: '사용자의 id' })
    id: number;

    @Column({
        nullable: true
    })
    @ApiProperty({ description: '사용자가 로그인한 SNS 타입' })
    social: string;

    @Column({
        unique: true,
        nullable: true
    })
    @ApiProperty({ description: '사용자가 로그인한 SNS의 ID 값' })
    social_id: string;

    @Column({
        nullable: true
    })
    @ApiProperty({ description: '사용자 이름' })
    name: string;

    @Column({
        nullable: true
    })
    @ApiProperty({ description: '사용자 연락처' })
    phone: string;

    @Column({
        nullable: true
    })
    @ApiProperty({ description: '사용자 생일' })
    birthday: Date;

    @Column({
        nullable: true
    })
    @ApiProperty({ description: '사용자 호칭' })
    position: string;

    /* Date Columns */

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date | null;
}