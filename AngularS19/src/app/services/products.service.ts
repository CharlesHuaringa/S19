import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] =[
    {
      id: '1',
      name: 'tablet',
      description: '8Gb Ram 512GB',
      price: 2200,
    },
    {
      id: '2',
      name: 'celular',
      description: 'Xiaomi Redmi Note 11 4GB Azul',
      price: 789,
    },
    {
      id: '3',
      name: 'mouse gamer',
      description: 'Logitech G - G502 HERO',
      price: 249,
    }
  ]
  constructor() { }

  createProduct(product: Product){
    this.products.push(product)
  }
  getAllProduct(){
    return this.products
  }
  getProductById(id: string){
   return this.products.find(product => product.id === id)
  }
}
