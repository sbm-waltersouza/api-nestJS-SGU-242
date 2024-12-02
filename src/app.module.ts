import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from './usuario.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/teste', {
    }),
    UsuarioModule,
  ],
})
export class AppModule {}
