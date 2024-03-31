import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../../model/Utilisateur";
import {Dowar} from "../../model/Dowar";
const baseUrl ="http://localhost:8080/api/dowars"

@Injectable({
  providedIn: 'root'
})
export class DowarService {

  constructor(private http : HttpClient) { }
  saveDowar(dowar: any, options?: any): Observable<any> {
    return this.http.post(`${baseUrl}/ajouterDowar`, dowar, {responseType: 'text'});
  }

  updateDowar(id: number, dowar: Dowar, options?: any): Observable<any> {
    return this.http.put(`${baseUrl}/updateDowar/${id}`, dowar, {responseType: 'text'});
  }
  getDowars(): Observable<Dowar[]> {
    return this.http.get<Dowar[]>(`${baseUrl}/all`);
  }

  getDowarsForVille(nomVille: number): Observable<Dowar[]> {
    return this.http.get<Dowar[]>(`${baseUrl}/dowars/${nomVille}`);
  }


  getDowarById(id :number) : Observable<Dowar>{
    return this.http.get<Dowar>(`${baseUrl}/${id}`);
  }

  deleteDowar(id: number, options?: any): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/deleteDowar/${id}`, options);
  }


  getNumberOfDowars() {
    return this.http.get<number>(`${baseUrl}/count`);
  }

  getKafilaCountForDowar(dowarId: number) {
    return this.http.get<number>(`${baseUrl}/kafilaCount/${dowarId}`);

  }
}
