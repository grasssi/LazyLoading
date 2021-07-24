import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'addUser',
    component: AddUserComponent
  },
  {
    path: 'updateUser/:id',
    component: UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
