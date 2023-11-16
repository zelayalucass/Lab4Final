import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/api.service';
import { CinemaService } from 'src/app/core/services/cinema.service';
import { AddSalaComponent } from '../add-sala/add-sala.component';
import { Cinema, Sala } from 'src/app/core/Models';
import { lastValueFrom } from 'rxjs';
import { SalaService } from 'src/app/core/services/sala.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-sala',
  templateUrl: './list-sala.component.html',
  styleUrls: ['./list-sala.component.css']
})
export class ListSalaComponent implements OnInit{

  isLoadingResults = true;
  cineId: number | null;

  ngOnInit(): void {
    this.api.cineId$.subscribe((cine) => {
      this.cineId = cine;
    })
  };

  constructor(private api:ApiService, private dialog: MatDialog, public sala:SalaService, private router:Router)
  {
    this.cineId = null;
  }


  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(AddSalaComponent, {
      width: '400px', height : '570px' // Ajusta el ancho según tus necesidades
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getSalasByIdCine();
    });
  }

  public navigateToBack()
  {
    this.router.navigate(['cine/home-cine'])
  }

  @Input() listaSalas:Array<Sala> = [];
  @Output() salaToDelete: EventEmitter<number> = new EventEmitter();
  @Output() salaToEdit: EventEmitter<Sala> = new EventEmitter();

  public DeleteSala(id :number)
  {
    this.salaToDelete.emit(id);
  }

  public CountList() : number
  {
    return this.listaSalas.length;
  }

  public EditSala(sala :Sala)
  {
    this.salaToEdit.emit(sala);
  }

  public async getSalasByIdCine()
  {
    try
    {
        let apiResponde = this.sala.getSalaByCinema(this.cineId!);       
        let data = await lastValueFrom(apiResponde);
        this.listaSalas = data.map((sala : any) => new Sala(sala))
    }
    catch(error)
   {
      console.log(error);
      
    }
  }
}


