import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CriarMenuDto {


    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    nome: string


    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    item: string;

    @IsString()
    @ApiProperty()
    tamanho: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    preco: string;



    @IsString()
    @ApiProperty()
    imagem: string;


    @IsString()
    @ApiProperty()
    observacao: string
}