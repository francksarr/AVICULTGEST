import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-veterinaire',
  templateUrl: './list-veterinaire.page.html',
  styleUrls: ['./list-veterinaire.page.scss'],
})
export class ListVeterinairePage implements OnInit {
veterinaire:{id: number, nom:string, num:number, adresse:string}[]=[
 { "id":1, "nom":"PharmaVet", "num":75757575, "adresse": "quartier du fleuve"},
 { "id":2, "nom":"CiproVet", "num":80808080, "adresse": "ACI"},
 { "id":3, "nom":"Pharmaci Véterrinaire", "num":60606060, "adresse": "Badalabougou"}
]
  constructor() {}

  ngOnInit() {
  }

}
