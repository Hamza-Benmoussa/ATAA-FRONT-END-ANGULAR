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
  saveBien(bien:any): Observable<any> {
    return this.http.post(`${baseUrl}/ajouterBiensEssentiel`,bien);
  }
  getBiens(): Observable<BiensEssantiel[]> {
    return this.http.get<BiensEssantiel[]>(`${baseUrl}`);
  }
  getBienById(id :number) : Observable<BiensEssantiel>{
    return this.http.get<BiensEssantiel>(`${baseUrl}/${id}`);
  }
  updateBien(id : number , bien : BiensEssantiel):Observable<BiensEssantiel>{
    return this.http.put<BiensEssantiel>(`${baseUrl}/updateBiensEssentiel/${id}`,bien);
  }
  deleteBien(id:number) :Observable<BiensEssantiel>{
    return this.http.delete<BiensEssantiel>(`${baseUrl}/deleteBiensEssentiel/${id}`);
  }
}
