import {Component, OnInit} from '@angular/core';
import {CartService} from '../../service/cart.service';
import {Product} from '../../../products/model/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  // private productInCart: Array<Product>;
  productInCart: Array<Product>; // используется в шаблоне - должно бцть публичным

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.getProductsInCart();
  }

  // префикс on--- говорит о том, что это обработчик - удобно
  onRemoveProductFromCart(product: Product): void {
    this.cartService.removeProductFromCart(product);
  }

  // не используется в шаблоне - делаем приватным
  private getProductsInCart(): void {
    this.productInCart = this.cartService.getProductInCart();
  }
}
