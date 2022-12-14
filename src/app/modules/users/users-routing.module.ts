import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUsersComponent } from './components/new-users/new-users.component';

const routes: Routes = [
    {
        path: 'newUser',
        component: NewUsersComponent,
        loadChildren: () => import('./router-child.module').then(m => m.RouterChildModule)
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
