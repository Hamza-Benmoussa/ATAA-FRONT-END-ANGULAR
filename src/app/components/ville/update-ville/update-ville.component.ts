import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateurService} from "../../../service/utilisateur/utilisateur.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VilleService} from "../../../service/ville/ville.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-ville',
  templateUrl: './update-ville.component.html',
  styleUrls: ['./update-ville.component.scss']
})
export class UpdateVilleComponent implements OnInit {

  updateVilleForm: FormGroup;
  id: number = this.activeRoute.snapshot.params["id"];

  constructor(
    private activeRoute: ActivatedRoute,
    private serviceVille: VilleService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.updateVilleForm = this.fb.group({
      nomVille: [null, [Validators.required]],
    });
    this.getVilleById();
  }
  getVilleById(){
    this.serviceVille.getVilleById(this.id).subscribe( (res) =>{
      this.updateVilleForm.patchValue(res);
    })
  }

  updateVille(){
    this.serviceVille.updateVille(this.id, this.updateVilleForm.value).subscribe((response) => {
      const responseCode = Number(response);
      if (responseCode === 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Ville updated successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.router.navigateByUrl("/ville/list-ville");
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update ville.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    })
  }
}
