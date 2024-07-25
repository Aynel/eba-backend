import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(2, { message: 'Producto debe contener al menos 2 caracteres.' })
  @IsNotEmpty()
  product: string;

  @IsNotEmpty()
  @IsInt({
    message: 'Debe ser un numero entero',
  })
  precio: number;

  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsString()
  codigo: string;
}
