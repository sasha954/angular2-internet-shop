import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';
import {CartService} from '../../../cart/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onAddToCart(product: Product): void {
    this.cartService.putProductToCart(product);
  }

  // метод не используется в шаблоне, можно сделать приватным
  private getProducts(): void {
    this.products = this.productService.getProducts();
  }
}
