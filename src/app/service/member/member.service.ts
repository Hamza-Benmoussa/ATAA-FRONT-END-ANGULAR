import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Member} from "../../model/Member";
const baseUrl ="http://localhost:8080/api/members"

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http : HttpClient) { }
  saveMember(member: any, options?: any): Observable<any> {
    return this.http.post(`${baseUrl}/ajouterMember`, member, {responseType: 'text'});
  }

  updateMember(id: number, member: Member, options?: any): Observable<any> {
    return this.http.put(`${baseUrl}/updateMember/${id}`, member, {responseType: 'text'});
  }
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(baseUrl);
  }

  getMemberById(id :number) : Observable<Member>{
    return this.http.get<Member>(`${baseUrl}/${id}`);
  }

  deleteMember(id: number, options?: any): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/deleteMember/${id}`, options);
  }

  getNumberOfMembers() {
    return this.http.get<number>(`${baseUrl}/count`);
  }
}
