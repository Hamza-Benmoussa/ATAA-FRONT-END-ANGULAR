import {Component, OnInit} from '@angular/core';
import {VilleService} from "../../../service/ville/ville.service";
import {Ville} from "../../../model/Ville";

@Component({
  selector: 'app-list-dv',
  templateUrl: './list-vd.component.html',
  styleUrls: ['./list-vd.component.scss']
})

export class ListVdComponent implements OnInit {

  villesWithDowarsAndArrivedKafilas: Ville[] = [];

  constructor(private villeService: VilleService) { } // replace DowarService with VilleService

  ngOnInit(): void {
    this.loadVillesWithDowarsAndArrivedKafilas();
  }

  loadVillesWithDowarsAndArrivedKafilas(): void {
    this.villeService.getVillesWithDowarsAndArrivedKafilas().subscribe(
      data => {
        this.villesWithDowarsAndArrivedKafilas = data;
      },
      error => console.log(error)
    );
  }

}
