import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { UpdateCoursComponent } from './update-cours/update-cours.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CoursesComponent,
    AddCoursComponent,
    UpdateCoursComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule

  ]
})
export class CoursesModule { }
