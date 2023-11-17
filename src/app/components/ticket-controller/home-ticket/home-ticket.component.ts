import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { Ticket } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-home-ticket',
  templateUrl: './home-ticket.component.html',
  styleUrls: ['./home-ticket.component.css']
})
export class HomeTicketComponent implements OnInit{

  public tickets: Array<Ticket> = [];
  
  isUserLoggedIn: boolean = false;
  constructor(private auth: AuthService, private apiTicket:TicketService, private dialog:MatDialog)
  {
    this.getTickets();
  }


  ngOnInit(): void {
  throw new Error('Method not implemented.');
}

public async getTickets()
{
  try
  {
      let apiResponde = this.apiTicket.getTickets();
      let data = await lastValueFrom(apiResponde);
      this.tickets = data.map((ticket : any) => new Ticket(ticket));
  }
  catch(error)
    {
      console.log(error);
    }
}

}
