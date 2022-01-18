import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Err } from "src/error";
import { Repository } from "typeorm";
import { CreateAreaDto } from "./dto/create-area.dto";
import { Area } from "./entities/area.entity";

@Injectable()
export class AreaService {
    constructor(
        @InjectRepository(Area)
        private readonly areaRepository: Repository<Area>
    ) { }

    async create(createAreaDto: CreateAreaDto) {
        const createArea = await this.areaRepository.save({
            name: createAreaDto.name
        });

        return createArea;
    }

    async findAll() {
        const areaList = await this.areaRepository
            .createQueryBuilder('areas')
            .getMany();
        return areaList;
    }
}