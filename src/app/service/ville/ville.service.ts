import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../../model/Utilisateur";
import {Ville} from "../../model/Ville";
import {Dowar} from "../../model/Dowar";
const baseUrl ="http://localhost:8080/api/villes"

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private http : HttpClient) { }
  saveVille(ville:any) : Observable<any> {
    return this.http.post(`${baseUrl}/ajouterVille`,ville);
  }
  getVilles(): Observable<Ville[]> {
    return this.http.get<Ville[]>(baseUrl);
  }

  getVilleById(id :number) : Observable<Ville>{
    return this.http.get<Ville>(`${baseUrl}/${id}`);
  }
  updateVille(id : number , ville : Ville):Observable<Ville>{
    return this.http.put<Ville>(`${baseUrl}/updateVille/${id}`,ville);
  }

  deleteVille(id:number) :Observable<Ville>{
    return this.http.delete<Ville>(`${baseUrl}/deleteVille/${id}`);
  }

  getNumberOfVilles() {
    return this.http.get<number>(`${baseUrl}/count`);
  }
}
