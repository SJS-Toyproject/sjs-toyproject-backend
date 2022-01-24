import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { HttpExceptionFilter } from "src/http.exception";
import { ApiDocs } from "./campus.docs";
import { CampusService } from "./campus.service";
import { CreateCampusDto } from "./dto/create-campus.dto";
import { UpdateCampusDto } from "./dto/update-campus.dto";
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

    @Patch()
    @ApiDocs.update('캠퍼스 이름/지구 수정 API')
    update(@Body() updateCampusDto: UpdateCampusDto) {
        return this.campusService.update(updateCampusDto)
    }

    @Get(':area_id')
    @ApiDocs.findAreaCampusById('지구에 속한 캠퍼스 목록 API')
    findAreaCampusById(@Param('area_id') area_id: number) {
        return this.campusService.findAreaCampusById(+area_id);
    }

    @Delete(':id')
    @ApiDocs.remove('캠퍼스 이름 삭제 API')
    remove(@Param('id') id: number) {
        return this.campusService.remove(+id);
    }
}