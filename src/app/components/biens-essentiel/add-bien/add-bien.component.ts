import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BienEssentielService} from "../../../service/bienEssentiel/bien-essentiel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.scss']
})
export class AddBienComponent implements OnInit {

  saveBienForm: FormGroup;
  constructor(private serviceBien : BienEssentielService, private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.saveBienForm = this.fb.group({
      nomBiens: [null,[Validators.required]],
      quantity: [null,[Validators.required]],
    });
    }
    saveBien(){
      this.serviceBien.saveBien(this.saveBienForm.value).subscribe((res) =>{
        this.router.navigateByUrl("/biens-essentiel/list-bien")
      })
    }

}
