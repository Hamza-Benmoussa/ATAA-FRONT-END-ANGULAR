import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BienEssentielService} from "../../../service/bienEssentiel/bien-essentiel.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

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
  saveBiensEssentiel(){
    this.serviceBien.saveBiensEssentiel(this.saveBienForm.value).subscribe((response) => {
      const responseCode = Number(response);
      if (responseCode === 0) {
        Swal.fire({
          title: 'Success!',
          text: 'BiensEssentiel added successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.router.navigateByUrl("/biensEssentiel/list-biensEssentiel")
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to add biensEssentiel.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    })
  }

}
