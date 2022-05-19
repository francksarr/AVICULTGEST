import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-commande',
  templateUrl: './ajouter-commande.page.html',
  styleUrls: ['./ajouter-commande.page.scss'],
})
export class AjouterCommandePage implements OnInit {
  clients: { id: number, nom: string, numero: number, adresse: string }[] = [
    { id: 0, nom: "Aissata DIARRA", numero: 76887654, adresse: "Aci" },
    { id: 1, nom: "Fatimata TOURE", numero: 76887654, adresse: "Sébénicoro" },
    { id: 2, nom: "Fodé DIAKITE", numero: 76887654, adresse: "Hamdalaye" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
