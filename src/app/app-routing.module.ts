import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './modules/users/components/users/users.component';
import { UsersRoutingModule } from './modules/users/users-routing.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/newUser'},
  {path: 'user', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: false, useHash: true}
    ),
    UsersRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
