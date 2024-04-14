import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {VilleService} from "../../../service/ville/ville.service";
import {Ville} from "../../../model/Ville";

@Component({
  selector: 'app-list-dv',
  templateUrl: './list-vd.component.html',
  styleUrls: ['./list-vd.component.scss']
})

export class ListVdComponent implements OnInit {

  villesWithDowarsAndArrivedKafilas: Ville[] = [];
  searchTerm: string = '';


  constructor(private villeService: VilleService , private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadVillesWithDowarsAndArrivedKafilas();
    setInterval(() => {
      this.loadVillesWithDowarsAndArrivedKafilas();
      this.cdRef.detectChanges();
    }, 30000);
  }
  searchVilles(): void {
    if (this.searchTerm.trim() !== '') {
      this.villesWithDowarsAndArrivedKafilas = this.villesWithDowarsAndArrivedKafilas.filter(user =>
        user.nomVille.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.loadVillesWithDowarsAndArrivedKafilas();
    }
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
