import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'PostList',
  templateUrl: './PostList.component.html',
  styleUrls: ['./PostList.component.scss']
})
export class PostList implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor(private appareilService: AppareilService){    
   }

  ngOnInit() { }

  loveIt(){
    this.loveIts++;
    console.log(this.loveIts);
  }

  dontLoveIt(){
    this.loveIts--;
    console.log(this.loveIts);

    }
  }