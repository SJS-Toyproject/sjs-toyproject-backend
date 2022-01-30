import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    RelationId,
    UpdateDateColumn
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";
import { Post } from "src/post/entities/post.entity";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty({ description: '댓글 id' })
    id: number;

    @Column()
    content!: string;

    /* Relations */

    @ManyToOne(() => User, user => user.commentList)
    user!: User;

    @ManyToOne(() => Post, post => post.commentList)
    post!: Post;

    /* Date Columns */

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt: Date | null;
}