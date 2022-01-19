import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Campus } from "src/campus/entities/campus.entity";
import { User } from "src/user/entities/user.entity";

@Entity('areas')
export class Area {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty({ description: '지구 id' })
    id: number;

    @Column()
    @ApiProperty({ description: '지구 이름' })
    name!: string;

    /* Relations */

    @OneToMany(() => Campus, campus => campus.area)
    campusList: Campus[];

    @OneToMany(() => User, user => user.area)
    userList: User[];

    /* Date Columns */

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt: Date | null;
}