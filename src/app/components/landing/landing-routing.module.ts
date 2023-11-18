import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing-page/landing-page.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:'landing-page',
    component:LandingComponent
  },
  {
    path:'landing-page/:id',
    component:LandingComponent
  },
  {
    path:'',
    redirectTo:"landing-page",
    pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ]
})
export class LandingRoutingModule { }
