import {
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { ApiProperty } from "@nestjs/swagger";
import { Area } from "src/area/entities/area.entity";
import { Campus } from "src/campus/entities/campus.entity";
import { Board } from 'src/board/entities/board.entity';
import { Comment } from "src/comment/entities/comment.entity"
import { Report } from "src/report/entities/report.entity"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty({ description: '사용자의 id' })
    id: number;

    @Column()
    @ApiProperty({ description: '사용자가 로그인한 SNS 타입' })
    social!: string;

    @Column({
        unique: true
    })
    @ApiProperty({ description: '사용자가 로그인한 SNS의 ID 값' })
    social_id!: string;

    @Column()
    @ApiProperty({ description: '사용자 이름' })
    name!: string;

    @Column({
        nullable: true,
    })
    @ApiProperty({ description: '사용자 연락처' })
    phone: string;

    @Column()
    @ApiProperty({ description: '사용자 생일' })
    birthday!: Date;

    @Column()
    @ApiProperty({ description: '사용자 호칭' })
    position!: string;

    /* Relations */

    @OneToMany(() => Board, board => board.user)
    boardList: Board[];

    @OneToMany(() => Report, report => report.user)
    reportList: Report[];

    @OneToMany(() => Comment, comment => comment.user)
    commentList: Comment[];

    @ManyToOne(() => Area, area => area.userList, { onDelete: 'CASCADE' })
    area!: Area;

    @ManyToOne(() => Campus, campus => campus.userList, { onDelete: 'CASCADE' })
    campus!: Campus;

    /* Date Columns */

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt: Date | null;
}
