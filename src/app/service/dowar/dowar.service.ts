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
  saveDowar(dowar:any) : Observable<any> {
    return this.http.post(`${baseUrl}/ajouterDowar`,dowar);
  }
  getDowars(): Observable<Dowar[]> {
    return this.http.get<Dowar[]>(baseUrl);
  }

  getDowarById(id :number) : Observable<Dowar>{
    return this.http.get<Dowar>(`${baseUrl}/${id}`);
  }
  updateDowar(id : number , dowar : Dowar):Observable<Dowar>{
    return this.http.put<Dowar>(`${baseUrl}/updateDowar/${id}`,dowar);
  }

  deleteDowar(id:number) :Observable<Dowar>{
    return this.http.delete<Dowar>(`${baseUrl}/deleteDowar/${id}`);
  }

  getNumberOfDowars() {
    return this.http.get<number>(`${baseUrl}/count`);
  }
}
