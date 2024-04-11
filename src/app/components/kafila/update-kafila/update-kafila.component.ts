import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";
import {KafilaService} from "../../../service/kafila/kafila.service";
import {Kafila} from "../../../model/Kafila";
import {Dowar} from "../../../model/Dowar";
import {BiensEssantiel} from "../../../model/BiensEssentiel";

@Component({
  selector: 'app-update-kafila',
  templateUrl: './update-kafila.component.html',
  styleUrls: ['./update-kafila.component.scss']
})
export class UpdateKafilaComponent implements OnInit {
  kafilaForm: FormGroup;
  id:number=this.activeRoute.snapshot.params["id"];
  dowars : Dowar[] = [];
  biensEssentiels : BiensEssantiel[] = [];

  constructor(private formBuilder: FormBuilder, private kafilaService: KafilaService ,
              private activeRoute : ActivatedRoute ,
              private router : Router) { }

  ngOnInit(): void {
    this.kafilaForm = this.formBuilder.group({
      nomKfila: ['', Validators.required],
      dateDepart: ['', Validators.required],
      dateArrivee: ['', Validators.required],
      dowarId: ['', Validators.required],
      bienKafilaDtos: this.formBuilder.array([]),
      arrivedKafila: [false],
      deleted: [false]
    });
    this.loadKafila();
  }

  get bienKafilaDtos() {
    return this.kafilaForm.get('bienKafilaDtos') as FormArray;
  }

  addBienKafila() {
    this.bienKafilaDtos.push(this.formBuilder.group({
      biensEssentielsId: ['', Validators.required],
      quantityBienKafila: ['', Validators.required]
    }));
  }

  removeBienKafila(index: number) {
    this.bienKafilaDtos.removeAt(index);
  }

  loadKafila(): void {
    this.kafilaService.getKafilaById(this.id).subscribe(kafila => {
      this.kafilaForm.patchValue(kafila);
    });
  }

  updateKafila() {
    this.kafilaService.updateKafila(this.id, this.kafilaForm.value).subscribe( response => {
      const responseCode = Number(response);
      if (responseCode === 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Kafila updated successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigateByUrl("/kafila/list-kafila");
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update kafila.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    })
  }
}
