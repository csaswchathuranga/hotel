import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component'
import{HomeCComponent} from './home-c/home-c.component'
import { HomeOComponent } from './home-o/home-o.component';
import { Register1Component } from './register1/register1.component';
import { Register2Component } from './register2/register2.component';
import { HomeC2Component } from './home-c2/home-c2.component';
import { Home2Component } from './home2/home2.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    redirectTo:'homec', 
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    
  },
  {
    path:'homec',
    component:HomeCComponent,
    canActivate:[AuthGuardService]
    
  },
  {
    path:'homec2/:action/:id',
    component:HomeC2Component,
    
  },
  {
    path:'homeo',
    component:HomeOComponent,
    
  }
  ,
  {
    path:'homeo2',
    component:Home2Component,
    
  },
  {
    path:'register1',
    component:Register1Component,
    
  },
  {
    path:'register2/:role',
    component:Register2Component,
    
  },
  { path: '**',
   component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
export const routingcomponents =[LoginComponent,HomeCComponent,HomeC2Component,HomeOComponent,Home2Component,Register1Component,Register2Component]