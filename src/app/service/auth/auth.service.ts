import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {LoginRequest, LoginResponse} from "../../model/login";
import {LoggerUser} from "../../model/logger-user";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelperService = new JwtHelperService();
  user = new BehaviorSubject<LoggerUser | null>(null);
  tokenExpirationTimer:any;
  constructor(private http: HttpClient , private router : Router) { }


  public login(user: LoginRequest): Observable<LoginResponse>{
    const formData  = new FormData();
    formData.append('username' , user.username);
    formData.append('password', user.password);
    return this.http.post<LoginResponse>(environment.backendHost+"/login",formData)
  }
  saveToken(jwtToken : LoginResponse)
  {
    const decodedAccessToken = this.jwtHelperService.decodeToken(jwtToken.accessToken);
    const loggedUser = new LoggerUser(decodedAccessToken.sub, decodedAccessToken.roles, jwtToken.accessToken, this.getExpirationDate(decodedAccessToken.exp));
    this.user.next(loggedUser);
    this.autoLogout(this.getExpirationDate(decodedAccessToken.exp).valueOf()-new Date().valueOf());
    localStorage.setItem("userData" , JSON.stringify(loggedUser));
    this.redirectLoggedInUse(decodedAccessToken, jwtToken.accessToken);
  }
  redirectLoggedInUse(decodedToken: any, accessToken: string){
    if(decodedToken.roles.includes("AdminApp")) {
      this.router.navigateByUrl("/dashboard");

    }
    else if (decodedToken.roles.includes("PresidantAssociation")){
      {
        this.router.navigateByUrl("/dashboard")
      }
    }
  }

  autoLogin() {
    const userData: {
      username: string,
      roles: string[],
      _token: string,
      _expiration: Date
    } = JSON.parse(<string>localStorage.getItem('userData'));

    if (userData) {
      const loadedUser = new LoggerUser(userData.username, userData.roles, userData._token, new Date(userData._expiration));
      if (loadedUser.token) {
        this.user.next(loadedUser);
        this.autoLogout(loadedUser._expiration.valueOf() - new Date().valueOf());
      }
    }
  }
  logout(){
    localStorage.clear();
    this.user.next(null);
    this.router.navigate(['/auth/login'])
    if (this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }
  getExpirationDate(exp : number){
    const  date = new Date(0);
    date.setUTCSeconds(exp)
    return date;
  }
  autoLogout(expirationDuration : number){
    this.tokenExpirationTimer = setTimeout(()=>{
      this.logout();
    },expirationDuration)

  }
}
