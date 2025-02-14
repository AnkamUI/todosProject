import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoServiceService} from '../app/todo-service.service'


@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers:[TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
