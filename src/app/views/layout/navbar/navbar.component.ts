import {Component, OnInit, ViewChild, ElementRef, Inject, Renderer2, OnDestroy} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import {AuthService} from "../../../service/auth/auth.service";
import {LoggerUser} from "../../../model/logger-user";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnDestroy {

  userSub !: Subscription;
  isAuthenticated = false;
  name:string|undefined;
  constructor(private authService: AuthService,
              @Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(loggedUser => {
      this.isAuthenticated = !!loggedUser;
      if (!!loggedUser) {
        this.name = loggedUser?.username
      }
    })
  }


  logout() {
    this.authService.logout();
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  toggleSidebar(e: Event) {
    e.preventDefault();
    this.document.body.classList.toggle('sidebar-open');
  }

}
