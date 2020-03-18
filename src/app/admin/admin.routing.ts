import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from '../helpers/auth.guard';

export const routes:Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'users',
        component:UsersComponent,
        canActivate:[AuthGuard]
    }
]