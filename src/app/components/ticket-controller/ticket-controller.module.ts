import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketControllerRoutingModule } from './ticket-controller-routing.module';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { HomeTicketComponent } from './home-ticket/home-ticket.component';


@NgModule({
  declarations: [
    ListTicketComponent,
    HomeTicketComponent
  ],
  imports: [
    CommonModule,
    TicketControllerRoutingModule
  ]
})
export class TicketControllerModule { }
//listar tickets, 