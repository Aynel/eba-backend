import { Injectable } from '@nestjs/common';

export interface Product {
  id?: string;
  product: string;
  precio: number;
  descripcion: string;
  codigo: string;
}

@Injectable()
export class AppService {
  getHello(): Product[] {
    return [
      {
        id: '1',
        product: 'Hydrogen',
        precio: 1.0079,
        codigo: 'H',
        descripcion: '',
      },
      {
        id: '2',
        product: 'Helium',
        precio: 4.0026,
        codigo: 'He',
        descripcion: '',
      },
      {
        id: '3',
        product: 'Lithium',
        precio: 6.941,
        codigo: 'Li',
        descripcion: '',
      },
      {
        id: '4',
        product: 'Beryllium',
        precio: 9.0122,
        codigo: 'Be',
        descripcion: '',
      },
      {
        id: '5',
        product: 'Boron',
        precio: 10.811,
        codigo: 'B',
        descripcion: '',
      },
      {
        id: '6',
        product: 'Carbon',
        precio: 12.0107,
        codigo: 'C',
        descripcion: '',
      },
      {
        id: '7',
        product: 'Nitrogen',
        precio: 14.0067,
        codigo: 'N',
        descripcion: '',
      },
      {
        id: '8',
        product: 'Oxygen',
        precio: 15.9994,
        codigo: 'O',
        descripcion: '',
      },
      {
        id: '9',
        product: 'Fluorine',
        precio: 18.9984,
        codigo: 'F',
        descripcion: '',
      },
      {
        id: '10',
        product: 'Neon',
        precio: 20.1797,
        codigo: 'Ne',
        descripcion: '',
      },
    ];
  }
}
