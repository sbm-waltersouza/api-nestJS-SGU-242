import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from './usuario.interface';

@Injectable()
export class UsuarioService {
  constructor(@InjectModel('Usuario') private readonly usuarioModel: Model<Usuario>) {}

  async create(usuario: Usuario): Promise<Usuario> {
    const createdUsuario = new this.usuarioModel(usuario);
    return createdUsuario.save();
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }

  async findOne(id: string): Promise<Usuario> {
    return this.usuarioModel.findById(id).exec();
  }

  async update(id: string, usuario: Usuario): Promise<Usuario> {
    return this.usuarioModel.findByIdAndUpdate(id, usuario, { new: true }).exec();
  }

  async remove(id: string): Promise<Usuario> {
    return this.usuarioModel.findByIdAndDelete(id).exec();
  }
}
