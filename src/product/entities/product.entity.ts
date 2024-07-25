import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column({ type: 'varchar', length: 150 })
  product: string;

  @Column({ type: 'int' })
  precio: number;

  @Column({ type: 'varchar' })
  descripcion: string;

  @Column({ type: 'varchar', length: 30 })
  codigo: string;
}
