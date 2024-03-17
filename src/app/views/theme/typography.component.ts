import { Component, OnInit } from '@angular/core';
import { CompteService} from 'src/services/compte.service';

@Component({
  templateUrl: 'typography.component.html',
})
export class TypographyComponent implements OnInit {

  public comptesGet: any;
  public selectedCompte: any;
  public selectedCompteId: any = null;
  public loadingDetails: boolean = false;
  public transactions : any ;
  
  constructor( private compteService: CompteService ) {}

  ngOnInit(): void {

    this.compteService.getData().subscribe(data => {
      this.comptesGet = data;
      //this.transactions = data ;
      console.log(this.comptesGet); // Affiche les données récupérées dans la console
    });

  }

  selectCompte(compte: any) {
    this.selectedCompte = compte;
    this.loadingDetails = true;
    setTimeout(() => {
      this.loadingDetails = false; // Indiquer que les détails sont chargés
    }, 1000);

  }

   // Fonction pour sélectionner un compte
   selectCompteId(compteId: number, trans : any) {
    this.selectedCompteId = compteId;
    this.transactions = trans ;
  }

  // Fonction pour désélectionner un compte
  deselectCompteId() {
    this.selectedCompteId = null;
    this.transactions = null ;
  }

}
