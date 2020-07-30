import { Injectable } from '@angular/core';
import {Product} from '../../products/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productList: Array<Product> = [];

  constructor() { }

  getProductInCart(): Array<Product> {
    return this.productList;
  }

  putProductToCart(product: Product): void {
    this.productList.push(product);
  }

  removeProductFromCart(product: Product): void{
    const index = this.productList.indexOf(product);
    this.productList.splice(index, 1);
  }
}
