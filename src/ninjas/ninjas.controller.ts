import { Controller,Get, Post,Delete,Put,Param,Query,Body } from '@nestjs/common';
import { CreateNinjaDto} from './dto/create-ninja.dto';
import {UpdateNinjaDto} from './dto/update-ninja.dto'
@Controller('ninjas')
export class NinjasController {
    //Get /ninjas?type=fast
    @Get()
    getNinjas(@Query('type') type: string){
        return {type}
    }

    //Get /ninjas/:id
    @Get(':id')
    getOneNinja(@Param ('id')  id: string){
        return {
            id
        }
    }

    //Post /ninjas
    @Post()
    createNinja(@Body() createNinjaDto:CreateNinjaDto){
        return {
            name:createNinjaDto.name
        }
    }

    //Delete /ninjas/:id
    @Delete(':id')
    removeNinjas(@Param ('id') id: string){
        return "deleting Ninjas at "+ id
    }

    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto){
        return {
            id,
            name:updateNinjaDto.name
        }
    }
    

}

