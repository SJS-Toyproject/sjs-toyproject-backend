import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export class User{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column({
        nullable: true
    })
    phone: string;

    @Column()
    birthday: Date;

    @Column()
    area: string;

    @Column()
    campus: string;

    @Column()
    position: string;

    @Column()
    refresh_token: string;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
    
    @DeleteDateColumn()
    deletedAt: Date | null;
}