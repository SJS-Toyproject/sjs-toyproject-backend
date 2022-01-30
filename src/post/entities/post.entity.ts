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

@Entity('post')
export class Post {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty({ description: '게시물 id' })
    id: number;

    @Column({ comment: '게시글 제목' })
    title: string;

    @Column({ comment: '게시글 내용' })
    content!: string;

    /* Relations */

    @ManyToOne(() => User, user => user.postList, { onDelete: 'CASCADE' })
    user: User;

    @OneToMany(() => Comment, comment => comment.post, { onDelete: 'CASCADE' })
    commentList: Comment[];

    /* Date Columns */

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt: Date | null;
}