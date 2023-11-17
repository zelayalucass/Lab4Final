import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { Ticket } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit{
  isUserLoggedIn: any;
  auth: any;

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
    
  }

  constructor(private api:ApiService, private dialog: MatDialog, public ticket:TicketService)
  {

  }

  @Input() listaTickets:Array<Ticket> = [];
  @Output() ticketToEdit: EventEmitter<Ticket> = new EventEmitter();

  isLoadingResults = true;

  public CountList() : number
  {
    return this.listaTickets.length;
  }

  public async getTickets()
  {
    try
    {
      let apiResponde = this.ticket.getTickets();
      let data = await lastValueFrom(apiResponde);
      this.listaTickets = data.map((product : any) => new Ticket(product));

    }
    catch(error){}
  }
}
