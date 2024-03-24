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
  saveMember(member:any) : Observable<any> {
    return this.http.post(`${baseUrl}/ajouterMember`,member);
  }
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(baseUrl);
  }
  getNumberOfMembers(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/count`);
  }
  getMemberById(id :number) : Observable<Member>{
    return this.http.get<Member>(`${baseUrl}/${id}`);
  }
  updateMember(id : number , member : Member):Observable<Member>{
    return this.http.put<Member>(`${baseUrl}/updateMember/${id}`,member);
  }
  deleteMember(id:number) :Observable<Member>{
    return this.http.delete<Member>(`${baseUrl}/deleteMember/${id}`);
  }
}
