import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Utilisateur} from "../../../model/Utilisateur";
import {Ville} from "../../../model/Ville";
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../../service/association/association.service";
import {UtilisateurService} from "../../../service/utilisateur/utilisateur.service";
import {VilleService} from "../../../service/ville/ville.service";

@Component({
  selector: 'app-update-association',
  templateUrl: './update-association.component.html',
  styleUrls: ['./update-association.component.scss']
})
export class UpdateAssociationComponent implements OnInit {

  updateAssociationForm : FormGroup;
  utilisateurs: Utilisateur[] = [];
  villes: Ville[] = [];
  id:number=this.activeRoute.snapshot.params["id"];
  constructor(
    private activeRoute : ActivatedRoute ,
    private associationService : AssociationService,
    private utilisateurService : UtilisateurService,
    private villeService : VilleService,
    private fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.updateAssociationForm = this.fb.group({
      nomAssociation: [null],
      nomPresidantId: [null],
      nbrSerie: [null],
      villeId: [null]
    });
    this.loadUsers();
    this.loadVilles();
    this.getAssociationById()
  }
  loadUsers(): void {
    this.utilisateurService.getUsersWithRole('PresidantAssociation').subscribe((users: Utilisateur[]) => {
      this.utilisateurs = users;
    });
  }
  loadVilles(): void {
    this.villeService.getVilles().subscribe((villes: Ville[]) => {
      this.villes = villes;
    });
  }
  getAssociationById(){
    this.associationService.getAssociationById(this.id).subscribe( (res) =>{
      this.updateAssociationForm.patchValue(res);
    })
  }
  updateAssociation(){
    this.associationService.updateAssociation(this.id,this.updateAssociationForm.value).subscribe((res)=>{
      if (res.id!=null){
        this.router.navigateByUrl("/association/list-association");
      }
    })
  }

}
