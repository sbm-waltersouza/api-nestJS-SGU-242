import { Schema } from 'mongoose';

export const UsuarioSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  senha: { type: String, required: true },
});
