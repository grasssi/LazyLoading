import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { SharedModule } from '../shared/shared.module';
import { ListUsersComponent } from './list-users/list-users.component';


@NgModule({

  declarations: [
    UsersComponent,
    UpdateUserComponent,
    AddUserComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,

  ]
})
export class UsersModule { }
