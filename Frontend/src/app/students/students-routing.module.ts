import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';

const StudentsRoutes: Routes = [
  { path: 'students', component: StudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(StudentsRoutes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
