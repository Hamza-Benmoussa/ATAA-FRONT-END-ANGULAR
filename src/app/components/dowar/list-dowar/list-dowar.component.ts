import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Dowar } from "../../../model/Dowar";
import { DowarService } from "../../../service/dowar/dowar.service";
import { DataTable } from "simple-datatables";
import { Ville } from "../../../model/Ville";
import { VilleService } from "../../../service/ville/ville.service";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-list-dowar',
  templateUrl: './list-dowar.component.html',
  styleUrls: ['./list-dowar.component.scss']
})
export class ListDowarComponent implements OnInit, AfterViewInit {

  dowars: Dowar[] = [];
  searchTerm: string = '';
  villes: Ville[] = [];

  constructor(
    private serviceDowar: DowarService,
    private serviceVille: VilleService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadData(); // Initial data load
    setInterval(() => {
      this.loadData(); // Refresh data every 30 seconds
    }, 30000);
  }

  ngAfterViewInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

  loadData(): void {
    forkJoin({
      dowars: this.serviceDowar.getDowars(),
      villes: this.serviceVille.getVilles()
    }).subscribe(({ dowars, villes }) => {
      this.dowars = dowars;
      this.villes = villes;
      this.cdRef.detectChanges();
    });
  }

  searchDowars(): void {
    if (this.searchTerm.trim() !== '') {
      this.dowars = this.dowars.filter(dowar =>
        this.getVilleNameById(dowar.villeId).toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.loadData();
    }
  }

  getVilleNameById(villeId: number): string {
    const ville = this.villes.find(v => v.id === villeId);
    return ville ? ville.nomVille : 'Unknown Ville'; // Return 'Unknown Ville' if no matching ville found
  }

  deleteDowar(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this dowar?');
    if (confirmDelete) {
      this.serviceDowar.deleteDowar(id).subscribe(() => {
        this.loadData(); // Refresh data after deleting dowar
      });
    }
  }
}
