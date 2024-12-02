import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.interface';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() usuario: Usuario) {
    return this.usuarioService.create(usuario);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() usuario: Usuario) {
    return this.usuarioService.update(id, usuario);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }
}
