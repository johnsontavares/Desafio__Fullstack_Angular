import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolsComponent } from './Schools.component';

const SchoolsRoutes: Routes = [
  { path: 'schools', component: SchoolsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(SchoolsRoutes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }
