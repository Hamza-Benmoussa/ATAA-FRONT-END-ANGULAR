import { Component, OnInit } from '@angular/core';
import {RoleUser} from "../../../model/RoleUser";
import {Genre} from "../../../model/Genre";

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.scss']
})
export class AddUtilisateurComponent implements OnInit {
  roles: string[] = Object.values(RoleUser);
  genres: string[] = Object.values(Genre);

  constructor() { }

  ngOnInit(): void {
  }

}
