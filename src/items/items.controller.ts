import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import {Item} from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService){

    }
    @Get()
     findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);
    }
    @Post()
    create(@Body() createItemDto: CreateItemDTO): Promise<Item> {
        return this.itemsService.createItem(createItemDto);
    }
    @Delete("/:id")
    delete(@Param("id") id): Promise<Item> {
        return this.itemsService.deleteItem(id)
    }
    @Put("/:id")
    update(@Param("id") id, @Body() createItemDto: CreateItemDTO): Promise<Item> {
        return this.itemsService.updateItem(id, createItemDto);
    }
}
