import { Component,  Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../core/model/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy  {

  today = new Date();
/*
  product: Product = {
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla bla'
  };
  */

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart() {
    console.log('añadir al carito');
    // this.productClicked.emit(this.product.id);
    this.cartService.addCart(this.product);
  }

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }


}
