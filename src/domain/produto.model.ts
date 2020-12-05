import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class Produto extends Model<Produto> {
  @Column({
    allowNull: false,
    type: DataType.STRING(60),
  })
  codigo: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  nome: string;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL(10, 2),
  })
  preco: number;
}
