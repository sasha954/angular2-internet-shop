import {Component, OnInit} from '@angular/core';
import {CartService} from '../../service/cart.service';
import {Product} from '../../../products/model/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  private productInCart: Array<Product>;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.getProductsInCart();
  }

  getProductsInCart(): void {
    this.productInCart = this.cartService.getProductInCart();
  }

  removeProductFromCart(product: Product): void {
    this.cartService.removeProductFromCart(product);
  }
}
