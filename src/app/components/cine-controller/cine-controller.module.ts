import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CineControllerRoutingModule } from './cine-controller-routing.module';
import { ListCineComponent } from './list-cine/list-cine.component';
import { HomeCineComponent } from './home-cine/home-cine.component';
import { AddCineComponent } from './add-cine/add-cine.component';
import { EditCineComponent } from './edit-cine/edit-cine.component';
import { SharedModule } from "../../shared/shared.module";


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
        SharedModule
    ]
})
export class CineControllerModule { }
