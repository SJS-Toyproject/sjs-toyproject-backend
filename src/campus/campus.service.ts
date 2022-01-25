import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Err } from "src/error";
import { Repository } from "typeorm";
import { CreateCampusDto } from "./dto/create-campus.dto";
import { UpdateCampusDto } from "./dto/update-campus.dto";
import { Campus } from "./entities/campus.entity";

export class CampusService {
    constructor(
        @InjectRepository(Campus)
        private readonly campusRepository: Repository<Campus>
    ) { }

    async create(createCampusDto: CreateCampusDto): Promise<Campus> {
        let createCampus;
        const target = await this.campusRepository.findOne({
            name: createCampusDto.name
        });

        if (target == null) {
            createCampus = await this.campusRepository.save({
                name: createCampusDto.name,
                areaId: createCampusDto.areaId
            });
        }
        else {
            throw new NotFoundException(Err.Campus.ALREADY_EXIST);
        }

        return createCampus;
    }

    async update(
        { areaId, name, id }: UpdateCampusDto
    ) {
        const existingCampus = await this.campusRepository.findOne({ id: id });

        existingCampus.areaId = areaId;
        existingCampus.name = name;

        const updateCampus = await this.campusRepository.save(existingCampus);
        return updateCampus;
    }

    async findAreaCampusById(id: number) {
        const campusList = await this.campusRepository.find({ areaId: id });

        return campusList;
    }

    async remove(id: number) {
        await this.campusRepository.delete(id);
    }
}