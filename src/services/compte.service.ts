import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private urlGetComptes = 'http://localhost:8080/api/comptes'; // Remplacez ceci par l'URL de votre API

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer des données de l'API
  getData(): Observable<any> {
    return this.http.get<any>(`${this.urlGetComptes}`);
  }
}