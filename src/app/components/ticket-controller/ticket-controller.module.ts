import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketControllerRoutingModule } from './ticket-controller-routing.module';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { HomeTicketComponent } from './home-ticket/home-ticket.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        ListTicketComponent,
        HomeTicketComponent
    ],
    imports: [
        CommonModule,
        TicketControllerRoutingModule,
        SharedModule
    ]
})
export class TicketControllerModule { }
//listar tickets, 