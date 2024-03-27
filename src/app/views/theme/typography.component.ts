import { Component, Input, OnInit } from '@angular/core';
import { CompteService} from 'src/services/compte.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  templateUrl: 'typography.component.html',
})
export class TypographyComponent implements OnInit {

  public comptesGet: any;
  public selectedCompte: any;
  public selectedCompteId: any = null;
  public loadingDetails: boolean = false;
  public transactions : any ;
  public editMode: boolean = false;
  public editModeId: any ;

  constructor( private compteService: CompteService, private http: HttpClient ) {}

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

  saveChanges(compte: any) {
    this.editMode = false;
    this.editModeId = compte.id ;


    const apiUrl = `http://localhost:8080/api/comptes/${compte.id}`;
    // Construisez l'objet contenant les données modifiées, par exemple :
    const newData = {
      numeroDeCompte: compte.numeroDeCompte,
      solde: compte.solde,
      utilisateur: {
        nom: compte.utilisateur.nom
      }
      // Ajoutez d'autres champs modifiables selon vos besoins
    };

    console.log(newData);

    this.http.put(apiUrl, newData)
      .subscribe(
        (response) => {
          console.log('Modification réussie :', response);
          // Traitez la réponse de l'API en fonction de vos besoins
        },
        (error) => {
          console.error('Erreur lors de la modification :', error);
          // Gérez les erreurs selon vos besoins
        }
      );

  }
  

}
