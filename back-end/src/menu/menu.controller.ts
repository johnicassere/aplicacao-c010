import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { Menu } from '@prisma/client';
import { MenuService } from './menu.service';
import { CriarMenuDto } from './dto/criar-menu.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateMenuDto } from './dto/update-menu.dto';



@ApiTags('menu')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

 @Post()
 @ApiOperation({
   summary: 'Criar um menu'
 })
 create(@Body() criarMenuDto: CriarMenuDto){
   return this.menuService.create(criarMenuDto)
 }

 @Get()
 @ApiOperation({
   summary: 'Listar todos menus'
 })
 findMany(){
   return this.menuService.findMany();
 }

 @Get(':id')
 @ApiOperation({
   summary: 'Lista um unico menu'
 })
 findUnique(@Param('id') menuId: string){
  return this.menuService.findUnique(menuId)
 }

 @Patch(':id')
 @ApiOperation({
   summary: 'Atualizar menu'
 })
update(@Param('id') menuId: string, @Body() updateMenuDto: UpdateMenuDto): Promise<Menu>{
return this.menuService.update(menuId, updateMenuDto);
}

@Delete(':id')
@ApiOperation({
  summary: 'Deletar Menu'
})
delete(@Param('id') menuId: string): Promise<Menu>{
  return this.menuService.delete(menuId);
}

}
