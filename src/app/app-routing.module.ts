import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CompareComponent } from './compare/compare.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard'


const routes: Routes = [
  
  {path: 'home', component:HomeComponent, canActivate: [AuthGuard]},
  {path: 'compare', component:CompareComponent, canActivate: [AuthGuard]},
  {path: '**', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
