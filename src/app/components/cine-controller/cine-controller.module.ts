import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CineControllerRoutingModule } from './cine-controller-routing.module';
import { ListCineComponent } from './list-cine/list-cine.component';
import { HomeCineComponent } from './home-cine/home-cine.component';
import { AddCineComponent } from './add-cine/add-cine.component';
import { EditCineComponent } from './edit-cine/edit-cine.component';
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
