import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VilleService } from "../../../service/ville/ville.service";
import { DowarService } from "../../../service/dowar/dowar.service";
import { Router } from "@angular/router";
import { Ville } from "../../../model/Ville"; // Assuming you have a Ville model

@Component({
  selector: 'app-add-dowar',
  templateUrl: './add-dowar.component.html',
  styleUrls: ['./add-dowar.component.scss']
})
export class AddDowarComponent implements OnInit {
  saveDowarForm: FormGroup;
  villes: Ville[] = []; // Array to hold the villes

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

  saveDowar() {
    if (this.saveDowarForm.valid) {
      this.dowarService.saveDowar(this.saveDowarForm.value).subscribe(() => {
        this.router.navigateByUrl("/dowar/list-dowar");
      });
    }
  }
}
