import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ville} from "../../model/Ville";
const baseUrl ="http://localhost:8080/api/villes"

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private http : HttpClient) { }
  saveVille(ville: any, options?: any): Observable<any> {
    return this.http.post(`${baseUrl}/ajouterVille`, ville, {responseType: 'text'});
  }

  updateVille(id: number, ville: Ville, options?: any): Observable<any> {
    return this.http.put(`${baseUrl}/updateVille/${id}`, ville, {responseType: 'text'});
  }
  getVilles(): Observable<Ville[]> {
    return this.http.get<Ville[]>(baseUrl);
  }

  getVilleById(id :number) : Observable<Ville>{
    return this.http.get<Ville>(`${baseUrl}/${id}`);
  }

  deleteVille(id: number, options?: any): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/deleteVille/${id}`, options);
  }

  getNumberOfVilles() {
    return this.http.get<number>(`${baseUrl}/count`);
  }

  getVillesWithDowarsAndArrivedKafilas(): Observable<Ville[]> {
    return this.http.get<Ville[]>(`${baseUrl}/villesWithDowarsAndArrivedKafilas`);
  }
}
