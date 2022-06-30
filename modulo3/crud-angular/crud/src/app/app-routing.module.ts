import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'users', component: UserListComponent
  },
  {
    path: 'users/new', component: UserFormComponent
  },
  {
    path: 'users/:id', component: UserFormComponent
  },
  {
    path: '', redirectTo: '/users', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
