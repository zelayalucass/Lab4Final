import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CineControllerRoutingModule } from './cine-controller-routing.module';
import { ListCineComponent } from './cine/list-cine/list-cine.component'; 
import { HomeCineComponent } from './cine/home-cine/home-cine.component';
import { AddCineComponent } from './cine/add-cine/add-cine.component';
import { EditCineComponent } from './cine/edit-cine/edit-cine.component';
import { SharedModule } from "../../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';
import { AddSalaComponent } from './sala/add-sala/add-sala.component';
import { ListSalaComponent } from './sala/list-sala/list-sala.component';
import { EditSalaComponent } from './sala/edit-sala/edit-sala.component';
import { HomeSalaComponent } from './sala/home-sala/home-sala.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
    declarations: [
        ListCineComponent,
        HomeCineComponent,
        AddCineComponent,
        EditCineComponent,
        AddSalaComponent,
        ListSalaComponent,
        EditSalaComponent,
        HomeSalaComponent
    ],
    imports: [
        CommonModule,
        CineControllerRoutingModule,
        SharedModule,
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule
    ]
})
export class CineControllerModule { }
