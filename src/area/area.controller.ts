import { Body, Get, Post, UseFilters } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { HttpExceptionFilter } from "src/http.exception";
import { ApiDocs } from "./area.docs";
import { AreaService } from "./area.service";
import { CreateAreaDto } from "./dto/create-area.dto";
import { Area } from "./entities/area.entity";

@Controller('areas')
@ApiTags('areas')
@UseFilters(new HttpExceptionFilter())
export class AreaController {
    constructor(
        private readonly areaService: AreaService
    ) { }

    @Post()
    @ApiDocs.create('새로운 지구 추가 API')
    create(@Body() createAreaDto: CreateAreaDto): Promise<Area> {
        return this.areaService.create(createAreaDto);
    }

    @Get()
    @ApiDocs.findAll('모든 지구 목록 API')
    findAll() {
        return this.areaService.findAll();
    }
}
