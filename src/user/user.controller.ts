import { Body, Controller, Post, UseFilters } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { User } from "./entities/user.entity";
import { ApiDocs } from "./user.docs";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto"
import { HttpExceptionFilter } from "../http.exception";

@Controller('users')
@ApiTags('users')
@UseFilters(new HttpExceptionFilter())
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Post()
    @ApiDocs.create('Sign Up')
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }
}