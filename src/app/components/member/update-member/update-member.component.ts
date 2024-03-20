import { Component, OnInit } from '@angular/core';
import {RoleMembers} from "../../../model/RoleMembers";
import {Genre} from "../../../model/Genre";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MemberService} from "../../../service/member/member.service";

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.scss']
})
export class UpdateMemberComponent implements OnInit {

  roles: string[] = Object.values(RoleMembers);
  genres: string[] = Object.values(Genre);
  id:number=this.activeRoute.snapshot.params["id"];
  updateMemberForm : FormGroup;
  constructor(
    private activeRoute : ActivatedRoute ,
    private serviceMember : MemberService,
    private fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.updateMemberForm = this.fb.group({
      nomMembres: [null,[Validators.required]],
      dateNaissance: [null,[Validators.required]],
      genre: [null,[Validators.required]],
      email: [null,[Validators.required]],
      tele: [null,[Validators.required]],
      address: [null,[Validators.required]],
      roleMembers: [null,[Validators.required]],
    });
    this.getMemberById()
  }

  getMemberById(){
    this.serviceMember.getMemberById(this.id).subscribe( (res) =>{
      this.updateMemberForm.patchValue(res);
    })
  }
  updateMember(){
    this.serviceMember.updateMember(this.id,this.updateMemberForm.value).subscribe((res)=>{
      if (res.id!=null){
        this.router.navigateByUrl("/member/list-member");
      }
    })
  }
}
