import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketControllerRoutingModule } from './ticket-controller-routing.module';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { HomeTicketComponent } from './home-ticket/home-ticket.component';
import { SharedModule } from "../../shared/shared.module";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AddTicketComponent } from './add-ticket/add-ticket.component';

@NgModule({
    declarations: [
        ListTicketComponent,
        HomeTicketComponent,
        AddTicketComponent
    ],
    imports: [
        CommonModule,
        TicketControllerRoutingModule,
        SharedModule,MatButtonModule,MatCardModule,MatInputModule,MatFormFieldModule,FormsModule
    ]
})
export class TicketControllerModule { }
//listar tickets, 