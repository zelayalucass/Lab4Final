import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTicketComponent } from './home-ticket/home-ticket.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeTicketComponent
  },
  {
    path:"list",
    component:ListTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketControllerRoutingModule { }
