import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNoFoundComponent } from './components/page-no-found.component';
import { PageNoFoundRoutingModule } from './page-no-found-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PageNoFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageNoFoundRoutingModule
  ]
})
export class PageNoFoundModule { }
