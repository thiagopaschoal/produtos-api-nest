import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Produto } from 'src/domain/produto.model';

@Injectable()
export class ProdutoService {
  constructor(@InjectModel(Produto) private produtoModel: typeof Produto) {}

  async findAll(): Promise<Produto[]> {
    const produtos = this.produtoModel.findAll();
    return produtos;
  }

  async findByCodigo(codigo: string): Promise<Produto> {
    const produto = this.produtoModel.findOne({
      where: {
        codigo,
      },
    });
    return produto;
  }

  async findById(id: number): Promise<Produto> {
    const produto = this.produtoModel.findByPk(id);
    return produto;
  }

  async add(produto: Produto) {
    this.produtoModel.create(produto);
  }
  async update(produto: Produto): Promise<[number, Produto[]]> {
    const produtoToUpdate = this.produtoModel.update(produto, {
      where: {
        id: produto.id,
      },
    });
    return produtoToUpdate;
  }
  async delete(id: number) {
    const produtoToDelete = await this.findById(id);
    produtoToDelete.destroy();
  }
}
