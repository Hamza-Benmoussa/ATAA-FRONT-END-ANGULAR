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
  saveUtilisateur(utilisateur: any, options?: any): Observable<any> {
    return this.http.post(`${baseUrl}/ajouterUtilisateur`, utilisateur, {responseType: 'text'});
  }

  updateUtilisateur(id: number, utilisateur: Utilisateur, options?: any): Observable<any> {
    return this.http.put(`${baseUrl}/updateUtilisateur/${id}`, utilisateur, {responseType: 'text'});
  }
  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(baseUrl);
  }

  getUtilisateurById(id :number) : Observable<Utilisateur>{
    return this.http.get<Utilisateur>(`${baseUrl}/${id}`);
  }

  getUsersWithRole(role: string): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${baseUrl}/role/${role}`);
  }

  deleteUtilisateur(id: number, options?: any): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/deleteUtilisateur/${id}`, options);
  }


  getNumberOfUtilisateurs() {
    return this.http.get<number>(`${baseUrl}/count`);
  }
}
