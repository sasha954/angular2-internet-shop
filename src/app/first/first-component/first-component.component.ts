import { Component, OnInit } from '@angular/core';
import {Category} from '../model/category.enum';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  name: string;
  description: string;
  price: number;
  category: any;
  isAvailable: boolean;
  tags: Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Yamaha RaveStar RS450';
    this.description = 'Electric guitar produced by Yamaha Corp.';
    this.price = 450;
    this.category = Category.MUSICAL_INSTRUMENTS;
    this.isAvailable = true;
    this.tags = ['Guitar', 'Yamaha', 'Music'];
  }

}
