import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Association} from "../../model/Association";
const baseUrl ="http://localhost:8080/api/associations"

@Injectable({
  providedIn: 'root'
})
export class AssociationService {

  constructor(private http : HttpClient) { }
  saveAssociation(association: any, options?: any): Observable<any> {
    return this.http.post(`${baseUrl}/ajouterAssociation`, association, {responseType: 'text'});
  }

  updateAssociation(id: number, association: Association, options?: any): Observable<any> {
    return this.http.put(`${baseUrl}/updateAssociation/${id}`, association, {responseType: 'text'});
  }
  getAssociations(): Observable<Association[]> {
    return this.http.get<Association[]>(baseUrl);
  }

  getAssociationById(id :number) : Observable<Association>{
    return this.http.get<Association>(`${baseUrl}/${id}`);
  }

  deleteAssociation(id: number, options?: any): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/deleteAssociation/${id}`, options);
  }

  getNumberOfAssociations() {
    return this.http.get<number>(`${baseUrl}/count`);
  }
}
