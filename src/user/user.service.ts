import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async create(createUserDto: CreateUserDto) {
        const createUser = await this.userRepository.save({
            social: createUserDto.social,
            social_id: createUserDto.social_id,
            name: createUserDto.name,
            phone: createUserDto.phone,
            birthday: createUserDto.birthday,
            position: createUserDto.position
        })

        return createUser;
    }
}