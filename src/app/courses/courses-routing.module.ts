import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { UpdateCoursComponent } from './update-cours/update-cours.component';
const routes: Routes = [
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: 'addCours',
    component: AddCoursComponent
  },
  {
    path: 'updateCours/:id',
    component: UpdateCoursComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
