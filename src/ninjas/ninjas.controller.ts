import { Controller,Get, Post,Delete,Put,Param,Query,Body, NotFoundException } from '@nestjs/common';
import { CreateNinjaDto} from './dto/create-ninja.dto';
import {UpdateNinjaDto} from './dto/update-ninja.dto'
import { NinjasService } from './ninjas.service';
@Controller('ninjas')
export class NinjasController {

    constructor(private readonly ninjasService:NinjasService){}

    //Get /ninjas?weapon=stars
    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks'){
        // const service = new NinjasService()
        return this.ninjasService.getNinjas(weapon)
    }

    //Get /ninjas/:id
    @Get(':id')
    getOneNinja(@Param ('id')  id: string){

        try {
            return this.ninjasService.getNinja(+id)
        } catch (error) {
            throw new NotFoundException()
        }
       
    }

    //Post /ninjas
    @Post()
    createNinja(@Body() createNinjaDto:CreateNinjaDto){
        return this.ninjasService.createNinja(createNinjaDto)
    }

    //put /ninjas/:id
    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto){
        return this.ninjasService.updateNinja(+id,updateNinjaDto)
    }

    
    //Delete /ninjas/:id
    @Delete(':id')
    removeNinjas(@Param ('id') id: string){
        return this.ninjasService.removeNinjas(+id)
    }
    

}

