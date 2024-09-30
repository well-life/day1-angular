import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './features/products/components/product-detail/product-detail.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './features/todos/components/todo/todo.component';
import { TodoFormComponent } from './features/todos/components/todo-form/todo-form.component';
import { TodoTotalComponent } from './features/todos/components/todo-total/todo-total.component';
import { TodoDetailComponent } from './features/todos/components/todo-detail/todo-detail.component';
import { TodoListComponent } from './features/todos/components/todo-list/todo-list.component';
import { AttrDirective } from './attr.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoService } from './cores/services/todo.service';
import { IndoDatePipe } from './indo-date.pipe';
import { provideHttpClient } from '@angular/common/http';
import { UserService } from './cores/services/user.service';
import { ComponentsComponent } from './cores/users/components/components.component';
import { CustomerChoiceComponent } from './features/customers/components/customer-choice/customer-choice.component';
import { CustomerDetailComponent } from './features/customers/components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './features/customers/components/customer-list/customer-list.component';
import { CustomerSearchComponent } from './features/customers/components/customer-search/customer-search.component';
import { ReservasiCreateComponent } from './features/reservasi/components/reservasi-create/reservasi-create.component';
import { ReservasiChoiceComponent } from './features/reservasi/components/reservasi-choice/reservasi-choice.component';
import { ReservasiListComponent } from './features/reservasi/components/reservasi-list/reservasi-list.component';
import { ReservasiDetailComponent } from './features/reservasi/components/reservasi-detail/reservasi-detail.component';
import { ReservasiSearchComponent } from './features/reservasi/components/reservasi-search/reservasi-search.component';
import { ReservasiSisaComponent } from './features/reservasi/components/reservasi-sisa/reservasi-sisa.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    NavigationComponent,
    TodoComponent,
    TodoFormComponent,
    TodoTotalComponent,
    TodoDetailComponent,
    TodoListComponent,
    AttrDirective,
    IndoDatePipe,
    ComponentsComponent,
    CustomerChoiceComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    CustomerSearchComponent,
    ReservasiCreateComponent,
    ReservasiChoiceComponent,
    ReservasiListComponent,
    ReservasiDetailComponent,
    ReservasiSearchComponent,
    ReservasiSisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    NgbTimepickerModule
  ],
  providers: [provideHttpClient(),
    TodoService ,
    // { provide: LOCALE_ID, useValue: 'id-ID' }, 
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
