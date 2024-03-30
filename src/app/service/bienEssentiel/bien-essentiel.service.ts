import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BiensEssantiel} from "../../model/BiensEssentiel";
const baseUrl ="http://localhost:8080/api/biensEssentiels"

@Injectable({
  providedIn: 'root'
})
export class BienEssentielService {

  constructor(private http : HttpClient) { }
  saveBiensEssentiel(biensEssentiel: any, options?: any): Observable<any> {
    return this.http.post(`${baseUrl}/ajouterBiensEssentiel`, biensEssentiel, {responseType: 'text'});
  }

  updateBiensEssentiel(id: number, biensEssentiel: BiensEssantiel, options?: any): Observable<any> {
    return this.http.put(`${baseUrl}/updateBiensEssentiel/${id}`, biensEssentiel, {responseType: 'text'});
  }
  getBiensEssentiels(): Observable<BiensEssantiel[]> {
    return this.http.get<BiensEssantiel[]>(baseUrl);
  }

  getBiensEssentielById(id :number) : Observable<BiensEssantiel>{
    return this.http.get<BiensEssantiel>(`${baseUrl}/${id}`);
  }

  deleteBiensEssentiel(id: number, options?: any): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/deleteBiensEssentiel/${id}`, options);
  }

  getNumberOfBiensEssentiels() {
    return this.http.get<number>(`${baseUrl}/count`);
  }
}
