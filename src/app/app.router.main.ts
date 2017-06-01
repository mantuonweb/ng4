import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/Login';
import { HomeComponent,routes as mainChildRoutes, HomeModule }  from './Home/Home';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
   {
     path: 'login',
     component: LoginComponent
   },
   {
     path: 'home',
     component: HomeComponent,
     //SPECIFY THE CHILDREN
     //for the child routes
     children: mainChildRoutes
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents:any = [];
