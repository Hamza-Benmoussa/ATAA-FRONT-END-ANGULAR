import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UtilisateurService} from "../../../service/utilisateur/utilisateur.service";
import {Router} from "@angular/router";
import {VilleService} from "../../../service/ville/ville.service";

@Component({
  selector: 'app-add-ville',
  templateUrl: './add-ville.component.html',
  styleUrls: ['./add-ville.component.scss']
})
export class AddVilleComponent implements OnInit {
  saveVilleForm: FormGroup;

  constructor(private  serviceVille : VilleService , private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.saveVilleForm = this.fb.group({
      nomVille: [null ,[Validators.required]],
    });

  }
  saveVille(){
    this.saveVilleForm.markAllAsTouched();
    this.serviceVille.saveVille(this.saveVilleForm.value).subscribe((res) =>{
      this.router.navigateByUrl("/ville/list-ville")
    })
  }
}
