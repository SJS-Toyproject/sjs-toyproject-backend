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
import { Board } from "src/board/entities/board.entity";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty({ description: '댓글 id' })
    id: number;

    @Column()
    content!: string;

    /* Relations */

    @ManyToOne(() => User, user => user.commentList, { onDelete: 'CASCADE' })
    user!: User;

    @ManyToOne(() => Board, board => board.commentList)
    board!: Board;

    /* Date Columns */

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt: Date | null;
}