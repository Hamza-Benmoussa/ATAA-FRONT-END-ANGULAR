import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UtilisateurService} from "../../../service/utilisateur/utilisateur.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RoleUser} from "../../../model/RoleUser";
import {Genre} from "../../../model/Genre";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.scss']
})
export class UpdateUtilisateurComponent implements OnInit {

  roles: string[] = Object.values(RoleUser);
  genres: string[] = Object.values(Genre);
  updateUtilisateurForm : FormGroup;
  id:number=this.activeRoute.snapshot.params["id"];
  constructor(
    private activeRoute : ActivatedRoute ,
    private serviceUtilisateur : UtilisateurService,
    private fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.updateUtilisateurForm = this.fb.group({
      nomComplete: [null ,[Validators.required]],
      email: [null ,[Validators.required]],
      password: [null ,[Validators.required]],
      address: [null ,[Validators.required]],
      tele: [null ,[Validators.required]],
      dateNaissance: [null ,[Validators.required]],
      roleUser: [null ,[Validators.required]],
      genre: [null ,[Validators.required]]
    });
    this.getUtilisateurById()
  }

  getUtilisateurById(){
    this.serviceUtilisateur.getUtilisateurById(this.id).subscribe( (res) =>{
      this.updateUtilisateurForm.patchValue(res);
    })
  }
  updateUtilisateur(){
    this.serviceUtilisateur.updateUtilisateur(this.id, this.updateUtilisateurForm.value).subscribe((response) => {
      const responseCode = Number(response);
      if (responseCode === 0) {
        Swal.fire({
          title: 'Success!',
          text: 'User updated successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.router.navigateByUrl("/utilisateur/list-utilisateur");
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update user.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    })
  }

}
