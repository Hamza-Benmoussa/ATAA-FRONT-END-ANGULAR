import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../../model/Utilisateur";
import {Association} from "../../model/Association";
const baseUrl ="http://localhost:8080/api/associations"

@Injectable({
  providedIn: 'root'
})
export class AssociationService {

  constructor(private http : HttpClient) { }
  saveAssociation(association:any) : Observable<any> {
    return this.http.post(`${baseUrl}/ajouterAssociation`,association);
  }
  getAssociations(): Observable<Association[]> {
    return this.http.get<Association[]>(baseUrl);
  }

  getAssociationById(id :number) : Observable<Association>{
    return this.http.get<Association>(`${baseUrl}/${id}`);
  }
  updateAssociation(id : number , association : Association):Observable<Association>{
    return this.http.put<Association>(`${baseUrl}/updateAssociation/${id}`,association);
  }

  deleteAssociation(id:number) :Observable<Association>{
    return this.http.delete<Association>(`${baseUrl}/deleteAssociation/${id}`);
  }

  getNumberOfAssociations() {
    return this.http.get<number>(`${baseUrl}/count`);
  }
}
