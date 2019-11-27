import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponencialPipe } from './pipes/exponential/exponencial.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponencialPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponencialPipe
  ],


  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
