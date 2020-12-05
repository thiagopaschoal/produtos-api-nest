import { Module } from '@nestjs/common';
import { AppController } from './interfaces/app.controller';
import { AppService } from './infraestructure/app.service';
import { ProdutoController } from './interfaces/produtos.controller';
import { ProdutoService } from './infraestructure/produto.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Produto } from './domain/produto.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'produtos',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Produto]),
  ],
  controllers: [AppController, ProdutoController],
  providers: [AppService, ProdutoService],
})
export class AppModule {}
