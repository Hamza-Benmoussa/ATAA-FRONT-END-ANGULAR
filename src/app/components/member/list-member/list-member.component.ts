import { Component, OnInit } from '@angular/core';
import {Association} from "../../../model/Association";
import {Member} from "../../../model/Member";

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.scss']
})
export class ListMemberComponent implements OnInit {

  associations: Association[] = [];
  members: Member[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
