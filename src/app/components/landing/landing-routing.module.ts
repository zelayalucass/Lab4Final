import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing-page/landing-page.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path:'landing-page',
    component:LandingComponent
  },
  {
    path:"detail/:id",
    component:DetailComponent
  },
  {
    path:'',
    redirectTo:'landing-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ]
})
export class LandingRoutingModule { }
