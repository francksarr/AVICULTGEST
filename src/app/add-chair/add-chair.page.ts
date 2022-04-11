import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-chair',
  templateUrl: './add-chair.page.html',
  styleUrls: ['./add-chair.page.scss'],
})
export class AddChairPage implements OnInit {
chair:{id:number,qdepart:number, nperdu: number,Date:string, qrestant:number}[]= [
  {id:0, qdepart:100,nperdu:0, Date:"6-04-2022",qrestant:100},
]
  constructor() { }

  ngOnInit() {
  }

}
