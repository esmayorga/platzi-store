import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from './../../../utils/validation';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

 form: FormGroup;
 id: string;

constructor(
    private formBuilder: FormBuilder,
    private  productsService: ProductsService,
    private router: Router,
    private activateRoute: ActivatedRoute
    ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(( params: Params ) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe( product => {
        this.form.patchValue( product
          /*{ id: product.id,
          description: product.description,}*/);
      });


    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    // console.log(this.form.value);
    if ( this.form.valid ) {
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
      .subscribe((newProduct) => {
       // console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    } else {
      console.log('Formulario no valido');
      }


  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [ Validators.required]],
      price: ['', [ Validators.required, MyValidators.isPriceValid ]],
      image: [''],
      description: ['', [ Validators.required]],
    });
    }

    get priceField() {
       return this.form.get('price');

    }

}
