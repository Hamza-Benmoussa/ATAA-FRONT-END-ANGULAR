import { Component, OnInit } from '@angular/core';

import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import {MemberService} from "../../../service/member/member.service";
import {BienEssentielService} from "../../../service/bienEssentiel/bien-essentiel.service";
import {KafilaService} from "../../../service/kafila/kafila.service";
import {UtilisateurService} from "../../../service/utilisateur/utilisateur.service";
import {VilleService} from "../../../service/ville/ville.service";
import {DowarService} from "../../../service/dowar/dowar.service";
import {AssociationService} from "../../../service/association/association.service";
import {AuthService} from "../../../service/auth/auth.service";
import {Utilisateur} from "../../../model/Utilisateur";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {
  numberOfMembers: number;
  numberOfBien: number;
  numberOfVille: number;
  numberOfDowar: number;
  numberOfAssociation: number;
  numberOfUtilisateur: number;
  isAdminApp: boolean ;
  isPresidantAssoication: boolean;
  currentDate: NgbDateStruct;


  constructor(private calendar: NgbCalendar,
              private authService: AuthService,
              private utilisateurService: UtilisateurService,
              private associationService: AssociationService,
              private villeService: VilleService,
              private dowarService: DowarService,
              private memberService: MemberService,
              private bienService: BienEssentielService,
              private kafilaService: KafilaService) {
  }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      if (user) {
        this.isAdminApp = user.roles.includes('AdminApp');
        this.isPresidantAssoication = user.roles.includes('PresidantAssociation');
      }
    });

    this.utilisateurService.getNumberOfUtilisateurs().subscribe(
      (count: number) => this.numberOfUtilisateur = count,
      (error: any) => console.log(error)
    );
    this.associationService.getNumberOfAssociations().subscribe(
      (count: number) => this.numberOfAssociation = count,
      (error: any) => console.log(error)
    );
    this.villeService.getNumberOfVilles().subscribe(
      (count: number) => this.numberOfVille = count,
      (error: any) => console.log(error)
    );
    this.dowarService.getNumberOfDowars().subscribe(
      (count: number) => this.numberOfDowar = count,
      (error: any) => console.log(error)
    );

    this.memberService.getNumberOfMembers().subscribe(
      (count: number) => this.numberOfMembers = count,
      (error: any) => console.log(error)
    );
    this.bienService.getNumberOfBiensEssentiels().subscribe(
      (count: number) => this.numberOfBien = count,
      (error: any) => console.log(error)
    );

    // this.kafilaService.getNumberOfKafilas().subscribe(
    //   (count: number) => this.numberOfMembers = count,
    //   (error: any) => console.log(error)
    // );
    this.currentDate = this.calendar.getToday();
  }
}
