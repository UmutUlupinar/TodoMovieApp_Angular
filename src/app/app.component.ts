import { Component } from '@angular/core';
import { Model, TodoItems } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  model = new Model();
  getUser(){
    return this.model.user;
  };
  getItems(){
    return this.model.items.filter(item=>!item.action);
  };
}
