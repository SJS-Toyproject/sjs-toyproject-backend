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
import { Area } from "src/area/entities/area.entity";
import { User } from "src/user/entities/user.entity";

@Entity('campus')
export class Campus {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty({ description: '캠퍼스 id' })
    id: number;

    @Column()
    name!: string;

    /* Relations */

    @ManyToOne(() => Area, area => area.campusList, { onDelete: 'CASCADE' })
    area!: Area;

    @OneToMany(() => User, user => user.campus)
    userList: User[];

    /* Date Columns */

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt: Date | null;
}