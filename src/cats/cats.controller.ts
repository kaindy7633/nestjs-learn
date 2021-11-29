/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  CreateCatDto,
  ListAllEntities,
  UpdateCatDto,
} from 'src/cats/dto/create-cat.dto';
import { Cat } from 'src/cats/interface/cat.interface';
import { Common } from 'src/interface/common.interface';
import { CatsService } from './cats.service';

@Controller('/api/cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<any> {
    this.catsService.create(createCatDto);
    return {
      code: 200,
      msg: 'This action adds a new cat',
      data: createCatDto,
    };
  }

  @Get()
  async findAll(
    @Query() query: ListAllEntities,
  ): Promise<Common & { data: Cat[] }> {
    return {
      code: 200,
      msg: 'ok',
      data: this.catsService.findAll(),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return {
      code: 200,
      msg: 'ok',
      data: `This action retuns a #${id} cat`,
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ): Promise<any> {
    return {
      code: 200,
      msg: `This action updates a #${id} cat`,
      data: updateCatDto,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
