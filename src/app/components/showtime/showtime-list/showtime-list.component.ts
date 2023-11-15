import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Showtime } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showtime-list',
  templateUrl: './showtime-list.component.html',
  styleUrls: ['./showtime-list.component.css']
})
export class ShowtimeListComponent {
  isUserLoggedIn: boolean = false;
  
  constructor(private auth: AuthService, private router:Router) {}
  
  @Input() listaCines:Array<Showtime> = [];
  @Output() cineToDelete: EventEmitter<number> = new EventEmitter();
  @Output() cineToEdit: EventEmitter<Showtime> = new EventEmitter();

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
  }

  public NavigateToAdd()
  {
    this.router.navigate(['showtime', 'add']);
  }
  
  public DeleteCine(id :number)
  {
    this.cineToDelete.emit(id);
  }

  public CountList() : number
  {
    return this.listaCines.length;
  }

  public EditCine(showtime :Showtime)
  {
    this.cineToEdit.emit(showtime);
  }
  
}
