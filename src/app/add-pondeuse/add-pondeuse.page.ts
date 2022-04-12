import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pondeuse',
  templateUrl: './add-pondeuse.page.html',
  styleUrls: ['./add-pondeuse.page.scss'],
})
export class AddPondeusePage implements OnInit {
  pondeuse:{id:number,qdepart:number, nperdu: number,Date:string, qrestant:number}[]= [
    {id:0, qdepart:100,nperdu:0, Date:"6-04-2022",qrestant:100},
  ]
  constructor() { }

  ngOnInit() {
  }

}
