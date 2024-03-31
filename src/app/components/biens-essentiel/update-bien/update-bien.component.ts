import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BienEssentielService} from "../../../service/bienEssentiel/bien-essentiel.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-bien',
  templateUrl: './update-bien.component.html',
  styleUrls: ['./update-bien.component.scss']
})
export class UpdateBienComponent implements OnInit {
  id:number=this.activeRoute.snapshot.params["id"];
  updateBienForm : FormGroup;
  constructor(
    private activeRoute : ActivatedRoute ,
    private serviceBien : BienEssentielService,
    private fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
this.updateBienForm = this.fb.group({
      nomBiens: [null,[Validators.required]],
      quantity: [null,[Validators.required]],
    });
    this.getBienById()
  }
  getBienById() {
    this.serviceBien.getBiensEssentielById(this.id).subscribe((res) => {
      this.updateBienForm.patchValue(res);
    });
  }
  updateBiensEssentiel(){
    this.serviceBien.updateBiensEssentiel(this.id, this.updateBienForm.value).subscribe((response) => {
      const responseCode = Number(response);
      if (responseCode === 0) {
        Swal.fire({
          title: 'Success!',
          text: 'BiensEssentiel updated successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.router.navigateByUrl("/biens-essentiel/list-bien");
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update biensEssentiel.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    })
  }

}
