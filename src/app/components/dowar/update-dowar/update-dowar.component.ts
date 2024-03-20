import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Ville } from "../../../model/Ville";
import { ActivatedRoute, Router } from "@angular/router";
import { DowarService } from "../../../service/dowar/dowar.service";
import { VilleService } from "../../../service/ville/ville.service";

@Component({
  selector: 'app-update-dowar',
  templateUrl: './update-dowar.component.html',
  styleUrls: ['./update-dowar.component.scss']
})
export class UpdateDowarComponent implements OnInit {

  updateDowarForm: FormGroup;
  villes: Ville[] = [];
  id: number;

  constructor(private fb: FormBuilder,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private serviceDowar: DowarService,
              private villeService: VilleService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params["id"];
    this.updateDowarForm = this.fb.group({
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

  updateDowar() {
    if (this.updateDowarForm.valid) {
      this.serviceDowar.updateDowar(this.id, this.updateDowarForm.value).subscribe((res) => {
        if (res.id != null) {
          this.router.navigateByUrl("/dowar/list-dowar");
        }
      });
    }
  }
}
