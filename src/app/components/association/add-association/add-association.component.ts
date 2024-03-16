import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Utilisateur} from "../../../model/Utilisateur";
import {Ville} from "../../../model/Ville";
import {AssociationService} from "../../../service/association/association.service";
import {UtilisateurService} from "../../../service/utilisateur/utilisateur.service";
import {VilleService} from "../../../service/ville/ville.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-association',
  templateUrl: './add-association.component.html',
  styleUrls: ['./add-association.component.scss']
})
export class AddAssociationComponent implements OnInit {
  saveAssociationForm: FormGroup;
  utilisateurs: Utilisateur[] = [];
  villes: Ville[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private associationService: AssociationService,
    private utilisateurService: UtilisateurService,
    private villeService: VilleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadUsers();
    this.loadVilles();
  }

  initForm(): void {
    this.saveAssociationForm = this.formBuilder.group({
      nomAssociation: [null, Validators.required],
      nomPresidantId: [null, Validators.required],
      nbrSerie: [null, Validators.required],
      villeId: [null, Validators.required],
      roleUser: [null, Validators.required]
    });
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

  saveAssociation(): void {
      this.associationService.saveAssociation(this.saveAssociationForm.value).subscribe(() => {
        this.router.navigateByUrl('/association/list-association');
      });
    }
}
