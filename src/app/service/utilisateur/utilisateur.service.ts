import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../../model/Utilisateur";
const baseUrl ="http://localhost:8080/api/utilisateurs"

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient) { }
  saveUtilisateur(utilisateur:any) : Observable<any> {
    return this.http.post(`${baseUrl}/ajouterUtilisateur`,utilisateur);
  }
  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(baseUrl);
  }

  getUtilisateurById(id :number) : Observable<Utilisateur>{
    return this.http.get<Utilisateur>(`${baseUrl}/${id}`);
  }
  updateUtilisateur(id : number , utilisateur : Utilisateur):Observable<Utilisateur>{
    return this.http.put<Utilisateur>(`${baseUrl}/updateUtilisateur/${id}`,utilisateur);
  }
  getUsersWithRole(role: string): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${baseUrl}/role/${role}`);
  }

  deleteUtilisateur(id:number) :Observable<Utilisateur>{
    return this.http.delete<Utilisateur>(`${baseUrl}/deleteUtilisateur/${id}`);
  }


  getNumberOfUtilisateurs() {
    return this.http.get<number>(`${baseUrl}/count`);
  }
}
