import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HttpExceptionFilter } from "src/http.exception";
import { AreaController } from "./area.controller";
import { AreaService } from "./area.service";
import { Area } from "./entities/area.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Area])],
    controllers: [AreaController],
    providers: [
        AreaService,
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        },
    ]
})
export class AreaModule { }