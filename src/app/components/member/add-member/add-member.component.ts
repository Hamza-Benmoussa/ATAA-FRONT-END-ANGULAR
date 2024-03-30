import { Component, OnInit } from '@angular/core';
import {RoleUser} from "../../../model/RoleUser";
import {Genre} from "../../../model/Genre";
import {RoleMembers} from "../../../model/RoleMembers";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MemberService} from "../../../service/member/member.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {
  roles: string[] = Object.values(RoleMembers);
  genres: string[] = Object.values(Genre);
  saveMemberForm: FormGroup;
  constructor(private serviceMember : MemberService ,private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.saveMemberForm = this.fb.group({
      nomMembres: [null,[Validators.required]],
      dateNaissance: [null,[Validators.required]],
      genre: [null,[Validators.required]],
      email: [null,[Validators.required]],
      tele: [null,[Validators.required]],
      address: [null,[Validators.required]],
      roleMembers: [null,[Validators.required]],
    });
    }
  saveMember(){
    this.serviceMember.saveMember(this.saveMemberForm.value).subscribe((response) => {
      const responseCode = Number(response);
      if (responseCode === 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Member added successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.router.navigateByUrl("/member/list-member")
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to add member.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    })
  }
}
