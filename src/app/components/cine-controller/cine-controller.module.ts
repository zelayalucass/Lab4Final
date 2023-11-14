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


@NgModule({
    declarations: [
        ListCineComponent,
        HomeCineComponent,
        AddCineComponent,
        EditCineComponent
    ],
    imports: [
        CommonModule,
        CineControllerRoutingModule,
        SharedModule,
        MatIconModule,
        ReactiveFormsModule
    ]
})
export class CineControllerModule { }
