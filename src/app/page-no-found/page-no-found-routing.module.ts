import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNoFoundComponent } from './components/page-no-found.component';




const routes: Routes = [
  {
    path: '',
    component: PageNoFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class PageNoFoundRoutingModule {
}
