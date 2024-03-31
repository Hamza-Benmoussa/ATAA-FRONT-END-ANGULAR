import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VilleService } from "../../../service/ville/ville.service";
import { DowarService } from "../../../service/dowar/dowar.service";
import { Router } from "@angular/router";
import { Ville } from "../../../model/Ville";
import Swal from "sweetalert2"; // Assuming you have a Ville model

@Component({
  selector: 'app-add-dowar',
  templateUrl: './add-dowar.component.html',
  styleUrls: ['./add-dowar.component.scss']
})
export class AddDowarComponent implements OnInit {
  saveDowarForm: FormGroup;
  villes: Ville[] = [];
  isAdminApp: boolean = false;
  constructor(
    private fb: FormBuilder,
    private villeService: VilleService,
    private dowarService: DowarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.saveDowarForm = this.fb.group({
      nomDowars: [null, [Validators.required]],
      villeId: [null, [Validators.required]],
      nmbrResidant: [null, [Validators.required]]
    });

    this.getVilles();
  }

  getVilles() {
    this.villeService.getVilles().subscribe((data: Ville[]) => {
      this.villes = data;
    });
  }

  saveDowar(){
    this.dowarService.saveDowar(this.saveDowarForm.value).subscribe((response) => {
      const responseCode = Number(response);
      if (responseCode === 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Dowar added successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.router.navigateByUrl("/dowar/list-dowar")
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to add dowar.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    })
  }
}
