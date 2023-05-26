import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoMovieApp_Angular';
  name = 'Umut';
  items= [
    {description:"Sci-Fi",action:"No"},
    {description:"Romance",action:"No"},
    {description:"Action",action:"No"}  
  ];
}
