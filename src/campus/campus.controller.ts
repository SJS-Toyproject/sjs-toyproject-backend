import { Body, Controller, Delete, Get, Param, Post, UseFilters } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { HttpExceptionFilter } from "src/http.exception";
import { ApiDocs } from "src/user/user.docs";
import { CampusService } from "./campus.service";
import { Campus } from "./entities/campus.entity";

@Controller('campus')
@ApiTags('campus')
@UseFilters(new HttpExceptionFilter())
export class CampusController {
    constructor(
        private readonly campusService: CampusService
    ) { }

    @Post()
    @ApiDocs.create('새로운 캠퍼스 추가 API')
    create(@Body() createCampusDto: CreateCampusDto): Promise<Campus> {
        return this.campusService.create(createCampusDto)
    }

    @Get()
    @ApiDocs.findAreaCampusById('특정 캠퍼스 찾기 API')
    findAreaCampusById(@Param('area_id') area_id: number): Promise<Campus> {
        return this.campusService.find(+area_id);
    }

    @Delete('/:id')
    @ApiDocs.remove('캠퍼스 이름 삭제 API')
    remove(@Param('id') id: string) {
        return this.campusService.remove(+id);
    }
}