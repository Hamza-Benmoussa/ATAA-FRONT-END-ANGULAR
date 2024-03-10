import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataTable} from "simple-datatables";
import {VilleService} from "../../../service/ville/ville.service";
import {Ville} from "../../../model/Ville";

@Component({
  selector: 'app-list-ville',
  templateUrl: './list-ville.component.html',
  styleUrls: ['./list-ville.component.scss']
})
export class ListVilleComponent implements OnInit, AfterViewInit{

  villes: Ville[] = [];
  searchTerm: string = '';


  constructor(private serviceVille: VilleService, private cdRef: ChangeDetectorRef) { }

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

  deleteVille(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this Ville ?');

    if (confirmDelete) {
      this.serviceVille.deleteVille(id).subscribe(() => {
        this.villes = this.villes.filter(user => user.id !== id);
        this.cdRef.detectChanges();
      });
    }
  }

}
