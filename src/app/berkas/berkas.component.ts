import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISimpleProduct } from '../features/products/interface/i-product';
@Component({
  selector: 'app-berkas',
  templateUrl: './berkas.component.html',
  styleUrls: ['./berkas.component.css'],
})
export class BerkasComponent {
  @Input() counter!: number;
  @Input() product: ISimpleProduct = {
    title: "",
    description: "",
    price: 0,
    stock: 0
  };
  @Output() emit: EventEmitter<number> = new EventEmitter();

  up() {
    this.counter++;
    this.emit.emit(this.counter);
  }

  down() {
    this.counter--;
    this.emit.emit(this.counter);
  }
}
