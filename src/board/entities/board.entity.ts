import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";
import { Comment } from "src/comment/entities/comment.entity"

@Entity('boards')
export class Board {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty({ description: '게시물 id' })
    id: number;

    @Column()
    title: string;

    @Column()
    content!: string;

    /* Relations */

    @ManyToOne(() => User, user => user.boardList, { onDelete: 'CASCADE' })
    user!: User;

    @OneToMany(() => Comment, comment => comment.board)
    commentList: Comment[];

    /* Date Columns */

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt: Date | null;
}