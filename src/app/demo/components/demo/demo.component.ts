import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  name;
  nombres = 'sebastian';
  power = 10;

  items = ['Julian', 'Pepito', 'Sofi'];

  addItem() {
    this.items.push('nuevo-item');
  }

  deleteItems(index: number) {
    this.items.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {  }

}
