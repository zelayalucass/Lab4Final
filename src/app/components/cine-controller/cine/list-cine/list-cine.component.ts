import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cinema } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { AddCineComponent } from '../add-cine/add-cine.component'; 
import { CinemaService } from 'src/app/core/services/cinema.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cine',
  templateUrl: './list-cine.component.html',
  styleUrls: ['./list-cine.component.css']
})
export class ListCineComponent implements OnInit{
 

  ngOnInit(): void {
  }

  constructor(private dialog: MatDialog, public cine:CinemaService, public api:ApiService, private router:Router)
  {
    
  }
  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(AddCineComponent, {
      width: '400px', height : '450px' // Ajusta el ancho según tus necesidades
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCines();
    });
  }

  @Input() listaCines:Array<Cinema> = [];
  @Output() cineToDelete: EventEmitter<number> = new EventEmitter();
  @Output() cineToEdit: EventEmitter<Cinema> = new EventEmitter();
  


  isLoadingResults = true;
  

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

  public navegarASalas(cineId: number) {
    this.api.getCineActualViewCineFromSala(cineId);
    this.router.navigate(['cine/home-sala'])
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
