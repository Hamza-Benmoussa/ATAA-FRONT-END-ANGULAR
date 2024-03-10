import { Component, OnInit } from '@angular/core';
import {RoleUser} from "../../../model/RoleUser";
import {Genre} from "../../../model/Genre";
import {UtilisateurService} from "../../../service/utilisateur/utilisateur.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.scss']
})
export class AddUtilisateurComponent implements OnInit {
  roles: string[] = Object.values(RoleUser);
  genres: string[] = Object.values(Genre);
  saveUtilisateurForm: FormGroup;



  constructor(private  serviceUtilisateur : UtilisateurService , private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.saveUtilisateurForm = this.fb.group({
      nomComplete: [null ,[Validators.required]],
      email: [null ,[Validators.required]],
      password: [null ,[Validators.required]],
      address: [null ,[Validators.required]],
      tele: [null ,[Validators.required]],
      dateNaissance: [null ,[Validators.required]],
      roleUser: [null ,[Validators.required]],
      genre: [null ,[Validators.required]]
    });

  }
  saveUtilisateur(){
    this.serviceUtilisateur.saveUtilisateur(this.saveUtilisateurForm.value).subscribe((res) =>{
      this.router.navigateByUrl("/utilisateur/list-utilisateur")
    })
  }

}
