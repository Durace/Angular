import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  posts: any[];  

  constructor(private appareilService: AppareilService){

   }

   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     this.posts= this.appareilService.posts;

   }
}