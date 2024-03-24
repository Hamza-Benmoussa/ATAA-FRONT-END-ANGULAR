import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Ville} from "../../../model/Ville";
import {VilleService} from "../../../service/ville/ville.service";
import {DataTable} from "simple-datatables";

@Component({
  selector: 'app-list-vd',
  templateUrl: './list-vd.component.html',
  styleUrls: ['./list-vd.component.scss']
})
export class ListVDComponent implements OnInit , AfterViewInit {
  villes: Ville[] = [];
  searchTerm: string = '';
  constructor(
    private serviceVille: VilleService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getVilles();
    setInterval(() => {
      this.getVilles();
      this.cdRef.detectChanges();
    }, 30000);
  }
  ngAfterViewInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
  getVilles(): void {
    this.serviceVille.getVilles().subscribe((res) => {
      this.villes = res;
    });
  }
  searchVilles(): void {
    if (this.searchTerm.trim() !== '') {
      this.villes = this.villes.filter(user =>
        user.nomVille.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.getVilles();
    }
  }


}
