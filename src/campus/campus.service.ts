import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Err } from "src/error";
import { Repository } from "typeorm";
import { CreateCampusDto } from "./dto/create-area.dto";
import { Campus } from "./entities/campus.entity";

export class CampusService {
    constructor(
        @InjectRepository(Campus)
        private readonly campusRepository: Repository<Campus>
    ) { }

    async create(createCampusDto: CreateCampusDto): Promise<Campus> {
        let createArea;
        const target = await this.campusRepository.findOne({
            name: createCampusDto.name
        });

        if (target == null) {
            createArea = await this.campusRepository.save({
                name: createCampusDto.name
            });
        }
        else {
            throw new NotFoundException(Err.Campus.ALREADY_EXIST);
        }
        return createArea;
    }

    async findAreaCampusById(id: number): Promise<Campus> {
        const areaList = await this.campusRepository
            .createQueryBuilder('campus')
            .getMany();
        return areaList;
    }

    async remove(id: number) {
        await this.campusRepository.delete(id);
    }
}