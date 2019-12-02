import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule ,routingcomponents} from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component'
import { AuthGuardService } from './guards/auth-guard.service';
import { UserService } from './user.service';
import { FoodService } from './food.service';


@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    PageNotFoundComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [AuthGuardService , UserService , FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
