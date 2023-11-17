import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketRoutingModule } from './ticket-routing.module';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddTicketComponent
  ],
  
  imports: [
    CommonModule,
    TicketRoutingModule,
    SharedModule,FormsModule,
    MatCardModule,MatButtonModule,MatInputModule,MatFormFieldModule
  ]
})
export class TicketModule { }
