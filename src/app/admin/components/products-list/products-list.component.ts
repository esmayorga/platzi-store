import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  products = [];
 constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe( products => {
      this.products = products;
    });
  }

  deleteProduct( id: string ) {
    this.productsService.deleteProduct(id).subscribe(rta => {
      console.log(rta);
      this.fetchProducts();
    });

  }

}
