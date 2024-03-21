import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BienEssentielService} from "../../../service/bienEssentiel/bien-essentiel.service";

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
      nom: [null,[Validators.required]],
      quantite: [null,[Validators.required]],
    });
    this.getBienById()
  }
  getBienById(){
    this.serviceBien.getBienById(this.id).subscribe( (res) =>{
      this.updateBienForm.patchValue(res);
    })
  }
  updateBien(){
    this.serviceBien.updateBien(this.id,this.updateBienForm.value).subscribe((res)=>{
      if (res.id!=null){
        this.router.navigateByUrl("/biens-essentiel/list-bien");
      }
    })
  }

}
