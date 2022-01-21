import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HttpExceptionFilter } from "src/http.exception";
import { CampusController } from "./campus.controller";
import { CampusService } from "./campus.service";
import { Campus } from "./entities/campus.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Campus])],
    controllers: [CampusController],
    providers: [
        CampusService,
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        },
    ]
})
export class AreaModule { }