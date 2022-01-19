import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";

@Entity('reports')
export class Report {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty({ description: '게시물 id' })
    id: number;

    @Column()
    soon_date!: Date;

    @Column()
    children!: string;

    @Column()
    content!: string;

    @Column({ nullable: true })
    prayer_list: string;

    @Column({
        default: false
    })
    is_confirmed!: boolean;

    /* Relations */

    @ManyToOne(() => User, user => user.reportList, { onDelete: 'CASCADE' })
    user!: User;

    /* Date Columns */

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt: Date | null;
}