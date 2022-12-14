import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUsersComponent } from './components/new-users/new-users.component';
import { UsersComponent } from './components/users/users.component';

const childRoutes: Routes = [
    {path: '', component: NewUsersComponent},
    {path: 'newUser', component: NewUsersComponent},
    {path: 'user', component: UsersComponent}
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class RouterChildModule { }
