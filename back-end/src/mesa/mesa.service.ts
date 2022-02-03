import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Mesa } from '@prisma/client';
import { CriarMesaDto} from './dto/criar-mesa.dto'
import { UpdateMesaDto } from './dto/update-mesa.dto';


@Injectable()
export class MesaService {
    constructor(private prismaService: PrismaService){}

 async create(criarMesaDto: CriarMesaDto, userId: string): Promise<Mesa>{
  const mesaExists = await this.prismaService.mesa.findFirst({
    where: { numeroMesa: criarMesaDto.numeroMesa},
  });
    if(mesaExists){
      throw new ConflictException('Mesa Ocupada')
    }

    const createdMesa = await this.prismaService.mesa.create({
     data:{
      numeroMesa: criarMesaDto.numeroMesa,
      livre: criarMesaDto.livre,
      descricao: criarMesaDto.descricao,
      id: userId,
      
      
     }
    });
  return createdMesa;
  }

  async findUnique(userId: string): Promise<Mesa>{
    const mesaFinded = await this.prismaService.mesa.findUnique({
      where: { id: userId }
    });
    if(!mesaFinded){
      throw new NotFoundException('Mesa nao encontrada')
    }
    return mesaFinded;
  }

 async findMany(): Promise<Mesa[]>{
    const mesas = await this.prismaService.mesa.findMany()
      return mesas
  }

 async update(userId: string, updateMesaDto: UpdateMesaDto ): Promise<Mesa>{
    const mesaFinded = await this.prismaService.mesa.findUnique({
      where: { id: userId }
    });

    if(!mesaFinded){
      throw new NotFoundException('Mesa nao encontrada');
    }

    const updatedMesa = await this.prismaService.mesa.update({
      
      where: { id: userId },
      data: {
        livre: updateMesaDto.livre,
        descricao: updateMesaDto.descricao,
      },
    });
    return updatedMesa;
  }


async delete(mesaId: string): Promise<Mesa>{
const consultarMesas = await this.prismaService.mesa.findUnique({
  where: { id: mesaId },
});

if(!consultarMesas){
throw new NotFoundException('Mesa nao encontrada')
}

const deletedMesa = await this.prismaService.mesa.delete({
  where: { id: mesaId },  
});
return deletedMesa;
  }

}
