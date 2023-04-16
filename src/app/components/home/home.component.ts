import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public serv:BlogService){}
  ngOnInit(): void {
    this.item=this.serv.data
  }
  @Input() item:any;
}
