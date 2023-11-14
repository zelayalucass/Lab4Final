import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cinema } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { AddCineComponent } from '../add-cine/add-cine.component';

@Component({
  selector: 'app-list-cine',
  templateUrl: './list-cine.component.html',
  styleUrls: ['./list-cine.component.css']
})
export class ListCineComponent implements OnInit{

  ngOnInit(): void {

  }

  constructor(private api:ApiService, private dialog: MatDialog)
  {
    
  }
  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(AddCineComponent, {
      width: '400px', height : '560px' // Ajusta el ancho según tus necesidades
    });

    dialogRef.afterClosed().subscribe(result => {
      // Puedes manejar acciones después de cerrar el diálogo aquí
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

  public EditCine(cinema :Cinema)
  {
    this.cineToEdit.emit(cinema);
  }
}
