import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BmiComponent } from './bmi/bmi.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [

    {
        path:'',component:HomeComponent
    
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'register',component:RegisterComponent

    },
    {
        path:'bmi',component:BmiComponent
    },
    {
        path:'**', component:PnfComponent
    }
];
