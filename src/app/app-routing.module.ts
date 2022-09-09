import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OuterFormComponent} from "./outer-form/outer-form.component";

const routes: Routes = [
  { path: '', component: OuterFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
