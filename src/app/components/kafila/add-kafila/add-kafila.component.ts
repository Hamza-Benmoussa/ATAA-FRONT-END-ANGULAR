import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { KafilaService } from '../../../service/kafila/kafila.service';
import { DowarService } from '../../../service/dowar/dowar.service';
import { Dowar } from '../../../model/Dowar';
import {BiensEssantiel} from "../../../model/BiensEssentiel";
import {BienEssentielService} from "../../../service/bienEssentiel/bien-essentiel.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-kafila',
  templateUrl: './add-kafila.component.html',
  styleUrls: ['./add-kafila.component.scss']
})
export class AddKafilaComponent implements OnInit {
  kafilaForm: FormGroup;
  dowars: Dowar[] = [];
  biensEssentiels: BiensEssantiel[] = [];

  constructor(private fb: FormBuilder,
              private kafilaService: KafilaService,
              private dowarService: DowarService,
              private router: Router,
              private biensEssentielService: BienEssentielService) { }

  ngOnInit(): void {
    this.kafilaForm = this.fb.group({
      nomKfila: [null, Validators.required],
      dateDepart: [null, Validators.required],
      dateArrivee: [null, Validators.required],
      dowarId: [null, Validators.required],
      bienKafilaDtos: this.fb.array([this.createBienKafila()])
    });

    this.loadDowars();
    this.loadBiensEssentiels();
  }

  createBienKafila(): FormGroup {
    return this.fb.group({
      biensEssentielsId: [null, Validators.required],
      quantityBienKafila: [null, Validators.required]
    });
  }

  addBienKafila(): void {
    this.bienKafilaDtos.push(this.createBienKafila());
  }

  removeBienKafila(index: number): void {
    this.bienKafilaDtos.removeAt(index);
  }

  get bienKafilaDtos(): FormArray {
    return this.kafilaForm.get('bienKafilaDtos') as FormArray;
  }

  saveKafila(){
    this.kafilaService.saveKafila(this.kafilaForm.value).subscribe(
      response => {
        Swal.fire({
          title: 'Success!',
          text: 'Kafila added successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.router.navigateByUrl("/kafila/list-kafila")
      },
      error => {
        if (error.status === 400 && error.error.message.includes('Not enough quantity available')) {
          Swal.fire({
            title: 'Error!',
            text: 'The quantity of BiensEssentiel is greater than the available quantity.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'An unexpected error occurred quantity is over .',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      }
    )
  }

  loadDowars(): void {
    this.dowarService.getDowars().subscribe(
      data => {
        this.dowars = data;
      },
      error => console.log(error));
  }

  loadBiensEssentiels(): void {
    this.biensEssentielService.getBiensEssentiels().subscribe(
      data => {
        this.biensEssentiels = data;
      },
      error => console.log(error));
  }

}
