import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cinema } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-list-cine',
  templateUrl: './list-cine.component.html',
  styleUrls: ['./list-cine.component.css']
})
export class ListCineComponent implements OnInit{

  ngOnInit(): void {
    this.api.getCases().subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      },
      error: (e) => {
        console.log(e);
        this.isLoadingResults = false;
      },
      complete: () => console.info('complete')
    });
  }

  constructor(private api:ApiService)
  {
    
  }

  @Input() listaCines:Array<Cinema> = [];
  @Output() cinetToDelete: EventEmitter<number> = new EventEmitter();
  @Output() cineToEdit: EventEmitter<Cinema> = new EventEmitter();

  displayedColumns: string[] = ['name', 'age', 'status'];
  data: Cinema[] = [];
  isLoadingResults = true;
  

  public DeleteProduct(id :number)
  {
    this.cinetToDelete.emit(id);
  }

  public EditProduct(cinema :Cinema)
  {
    this.cineToEdit.emit(cinema);
  }
}
