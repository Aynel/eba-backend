import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product: Product = new Product();
    product.product = createProductDto.product;
    product.precio = createProductDto.precio;
    product.descripcion = createProductDto.descripcion;
    product.codigo = createProductDto.codigo;
    return this.productRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: string): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const product: Product = new Product();
    product.product = updateProductDto.product;
    product.precio = updateProductDto.precio;
    product.descripcion = updateProductDto.descripcion;
    product.codigo = updateProductDto.codigo;
    product.id = id;
    return this.productRepository.save(product);
  }

  remove(id: string): Promise<{ affected?: number }> {
    return this.productRepository.delete(id);
  }
}
