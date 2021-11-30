import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CondidatesComponent } from './condidates/condidates.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { S1Service } from './s1.service';


const routes: Routes = [
  {path:"",component:LoginComponent},
{path:"Log",component:LoginComponent},
  {path:"Register",component:RegisterComponent},
  {path:"condidate",component:CondidatesComponent,canActivate:[S1Service]},
  {path:"Register/:id",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
