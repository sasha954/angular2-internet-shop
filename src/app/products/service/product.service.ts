import {Injectable} from '@angular/core';
import {Product} from '../model/product.model';
import {Category} from '../model/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Array<Product> = [
    new Product('Yamaha RaveStar RS420', 'Electric guitar produced by Yamaha Corp.',
      450, Category.MUSICAL_INSTRUMENTS, true),
    new Product('IPhone 11', 'Mobile phone produced by Apple',
      450, Category.MOBILE_PHONES, true),
    new Product('MSI Mouse Controller', 'Mouse controller produced by MSI',
      450, Category.PC, true)
  ];

  constructor() { }

  getProducts(): Array<Product> {
    return this.products;
  }
}
