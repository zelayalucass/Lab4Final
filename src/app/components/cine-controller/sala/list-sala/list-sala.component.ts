import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/api.service';
import { CinemaService } from 'src/app/core/services/cinema.service';
import { AddSalaComponent } from '../add-sala/add-sala.component';
import { Cinema } from 'src/app/core/Models';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-list-sala',
  templateUrl: './list-sala.component.html',
  styleUrls: ['./list-sala.component.css']
})
export class ListSalaComponent implements OnInit{

  isLoadingResults = true;


  ngOnInit(): void {

  };

  constructor(private api:ApiService, private dialog: MatDialog, public cine:CinemaService)
  {
    
  }


  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(AddSalaComponent, {
      width: '400px', height : '450px' // Ajusta el ancho según tus necesidades
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCines();
    });
  }

  @Input() listaCines:Array<Cinema> = [];
  @Output() cineToDelete: EventEmitter<number> = new EventEmitter();
  @Output() cineToEdit: EventEmitter<Cinema> = new EventEmitter();

  public DeleteCine(id :number)
  {
    this.cineToDelete.emit(id);
  }

  public CountList() : number
  {
    return this.listaCines.length;
  }

  public EditCine(cinema :Cinema)
  {
    this.cineToEdit.emit(cinema);
  }

 
      



  public async getCines()
  {
    try
    {
        let apiResponde = this.cine.getCinemas();       
        let data = await lastValueFrom(apiResponde);
        this.listaCines = data.map((product : any) => new Cinema(product))
    }
    catch(error)
   {
      console.log(error);
      
    }
  }
}


