import { Component, OnInit } from '@angular/core';
import { BlogService } from './service/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  constructor(public serv:BlogService){}
  ngOnInit(): void {
    this.data=this.serv.data
  }
  title = 'blog-website';
  
}
