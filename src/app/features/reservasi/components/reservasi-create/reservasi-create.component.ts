import { Component, Input } from '@angular/core';
import { IReservasi } from '../../../../cores/interfaces/i-reservasi';
import { Reservasi } from '../../../../cores/models/reservasi';
import { ReservasiService } from '../../../../cores/services/reservasi.service';
import { ICustomer } from '../../../../cores/interfaces/i-customer';

@Component({
  selector: 'app-reservasi-create',
  templateUrl: './reservasi-create.component.html',
  styleUrl: './reservasi-create.component.css',
})
export class ReservasiCreateComponent {
  
  // reservasi: IReservasi = new Reservasi();
  @Input()
  customer!:ICustomer;

  time = {hour:13, minute:30};

  constructor(private reservasiService: ReservasiService) {}

  get reservasi() {
    return this.reservasiService.reservasi;
  }

  set reservasi(data: IReservasi) {
    this.reservasiService.reservasi = data;
  }

  onCreate() {
    this.reservasiService.create(this.time).subscribe((resp: IReservasi) => {
      console.log(resp);
    });
  }

  onGetReservation(data: IReservasi){
    this.reservasiService.reservasi = data;
  }
  
}
