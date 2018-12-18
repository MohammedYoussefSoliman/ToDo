import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';
import { RouterModule , Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';

const appRouts:Routes = [
  {path:'',component:TodoComponent},
  {path:'home',component:TodoComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:TodoComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
