import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Kafila} from "../../model/Kafila";
const baseUrl ="http://localhost:8080/api/kafilas"
@Injectable({
  providedIn: 'root'
})
export class KafilaService {

  constructor(private http : HttpClient) { }
  saveKafila(kafila: any, options?: any) : Observable<any> {
    return this.http.post(`${baseUrl}/ajouterKafila`, kafila, {responseType: 'text'});
  }
  updateKafila(id: number, kafila: any, options?: any): Observable<any> {
    return this.http.put(`${baseUrl}/updateKafila/${id}`, kafila, {responseType: 'text'});
  }

  deleteKafila(id: number | undefined, options?: any): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/deleteKafila/${id}`, options);
  }
  getKafilas(): Observable<Kafila[]> {
    return this.http.get<Kafila[]>(baseUrl);
  }
  getKafilaById(id :number) : Observable<Kafila>{
    return this.http.get<Kafila>(`${baseUrl}/${id}`);
  }
  getNumberOfKafilas(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/count`);

  }
}
