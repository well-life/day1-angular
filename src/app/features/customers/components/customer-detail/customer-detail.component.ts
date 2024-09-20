import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import {
  faCheckCircle,
  faClose,
  faCross,
  faExclamationCircle,
  faPencil,
  faPlusCircle,
  faTrash,
  faUndo
} from '@fortawesome/free-solid-svg-icons';
import { ReservasiService } from '../../../../cores/services/reservasi.service';
import { IReservasi } from '../../../../cores/interfaces/i-reservasi';
import { Reservasi } from '../../../../cores/models/reservasi';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css'
})

// export class CustomerDetailComponent implements OnInit
export class CustomerDetailComponent {
  @Input()
  customer!:ICustomer;
  @Input() buttonVisible: boolean = true;

  reservasi: IReservasi[] = [];

  constructor(private reservasiService: ReservasiService){

  }

  // ngOnInit(): void {
  //   this.getReservasi();
  // }

  icons = {
    confirm: faExclamationCircle,
    edit: faPencil,
    remove: faTrash,
    checklist: faCheckCircle,
    cancel: faClose,
    restore: faUndo,
  };

  customerReservasi() {
    this.reservasiService.customer = this.customer;
  }   

  getSpanColor(status:string): string{
    return status === "macet" ? 'badge text-bg-danger rounded-pill' : "badge text-bg-primary rounded-pill";
  }
  
}


// customerReservasi(customerId: number): void {
  //   // Pertama, ambil data reservasi dari service
  //   this.reservasiService.all().subscribe(reservasiList => {
  //     // Filter reservasi berdasarkan customer.id
  //     const filteredReservasi = reservasiList.filter(reservasi => 
  //       reservasi.customer.id === customerId // Pastikan customerId adalah tipe number
  //     );
  
  //     // Jika ada reservasi untuk customer ini, ambil yang pertama; jika tidak, buat objek Reservasi baru
  //     if (filteredReservasi.length > 0) {
  //       this.reservasiService.reservasi = filteredReservasi[0];
  //     } else {
  //       // Jika tidak ada reservasi, atur data customer ke reservasiService
  //       this.reservasiService.reservasi = new Reservasi();
  //       this.reservasiService.reservasi.customer = this.customer; // Pastikan untuk set customer juga
  //     }
  //   });
 
  // }
  
   
  // customerReservasi() {
  //   this.reservasiService.customer = this.customer;
  // }
  
  // getReservasi(): void {
  //   this.reservasiService.all().subscribe({
  //     next: (data) => {
  //       this.reservasi = data;  // Simpan data ke dalam variabel
  //     },
  //     error: (error) => {
  //       console.error('Error fetching reservasi', error);
  //     }
  //   });
  // }
  