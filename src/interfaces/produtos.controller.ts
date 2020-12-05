import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from 'src/domain/produto.model';
import { ProdutoService } from 'src/infraestructure/produto.service';

@Controller('produtos')
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}

  @Get()
  async findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get(':id')
  async findById(@Param() params): Promise<Produto> {
    const { id } = params;
    return this.produtoService.findById(id);
  }

  @Post()
  async add(@Body() produto: Produto) {
    this.produtoService.add(produto);
  }

  @Put()
  async update(@Body() produto: Produto): Promise<[number, Produto[]]> {
    return this.produtoService.update(produto);
  }

  @Delete(':id')
  async delete(@Param() params) {
    const { id } = params;
    this.produtoService.delete(id);
  }
}
