import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // total = 0;
  total$: Observable<number>;
  constructor(
    private cartService: CartService
  ) {
    /*
    this.cartService.carts$.subscribe( products => {
      console.log(products);
      this.total = products.length;

    });*/
/*
    this.cartService.carts$.pipe(map( products =>  products.length))
    .subscribe( total => {
      this.total = total;
    });
*/
   this.total$ = this.cartService.carts$.pipe(map( products => products.length));
   }



  ngOnInit() {
  }

}
