import { Component, EventEmitter, Output, TemplateRef } from '@angular/core';
import { ReservasiService } from '../../../../cores/services/reservasi.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IReservasi } from '../../../../cores/interfaces/i-reservasi';
import { IPagination } from '../../../../cores/interfaces/i-pagination';

@Component({
  selector: 'app-reservasi-choice',
  templateUrl: './reservasi-choice.component.html',
  styleUrl: './reservasi-choice.component.css'
})
export class ReservasiChoiceComponent {
  constructor(
    private modalService: NgbModal,
    private reservasiService: ReservasiService
  ) {}

  closeResult = "";
  @Output() emitReservation: EventEmitter<IReservasi> = new EventEmitter();
  page: number = 1;
  query: string = '';

  open(content: TemplateRef<any>){
    this.onAllReservations();
    this.modalService.open(content, {size: 'lg'}).result.then(
      (result) => {
        this.closeResult = `Close with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    )
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  get reservations(): IPagination<IReservasi[]> {
    return this.reservasiService.reservations;
  }

  onAllReservations() {
    this.reservasiService.all().subscribe((resp: IPagination<IReservasi[]>) => {
      this.reservasiService.reservations = resp;
    });
  }

  onGetReservation(data:IReservasi){
    this.emitReservation.emit(data);
  }

  onPaginateReservation(data: number) {
    console.log(typeof data);
    this.reservasiService
      .all(data, this.query)
      .subscribe((resp: IPagination<IReservasi[]>) => {
        this.reservasiService.reservations = resp;
      });
  }

  onSearchReservation() {
    this.page = 1;
    this.reservasiService
      .all(this.page, this.query)
      .subscribe((resp: IPagination<IReservasi[]>) => {
        this.reservasiService.reservations = resp;
      });
  }
}
