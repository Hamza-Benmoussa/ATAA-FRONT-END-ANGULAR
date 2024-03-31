import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Ville } from "../../../model/Ville";
import { ActivatedRoute, Router } from "@angular/router";
import { DowarService } from "../../../service/dowar/dowar.service";
import { VilleService } from "../../../service/ville/ville.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-dowar',
  templateUrl: './update-dowar.component.html',
  styleUrls: ['./update-dowar.component.scss']
})
export class UpdateDowarComponent implements OnInit {

  updateDowarForm: FormGroup;
  villes: Ville[] = [];
  Dowar: any;
  id: number;
  isAdminApp: boolean = false;

  constructor(private fb: FormBuilder,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private serviceDowar: DowarService,
              private villeService: VilleService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params["id"];
    this.updateDowarForm = this.fb.group({
      id: [this.id],
      nomDowars: [null, [Validators.required]],
      villeId: [null, [Validators.required]],
      nmbrResidant: [null, [Validators.required]]
    });
    this.getVilles();
    this.getDowarById();
  }

  getDowarById() {
    this.serviceDowar.getDowarById(this.id).subscribe((res) => {
      this.updateDowarForm.patchValue(res);
    });
  }

  getVilles() {
    this.villeService.getVilles().subscribe((data: Ville[]) => {
      this.villes = data;
    });
  }

  updateDowar(){
    const id = this.updateDowarForm.value.id;
    if (id) {
      this.serviceDowar.updateDowar(id, this.updateDowarForm.value).subscribe((response) => {
        const responseCode = Number(response);
        if (responseCode === 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Dowar updated successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.router.navigateByUrl("/dowar/list-dowar")
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to update dowar.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      })
    } else {
      console.error('Dowar id is not defined');
    }
  }
}
