import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Dowar } from "../../../model/Dowar";
import { DowarService } from "../../../service/dowar/dowar.service";
import { DataTable } from "simple-datatables";
import { Ville } from "../../../model/Ville";
import { VilleService } from "../../../service/ville/ville.service";
import { forkJoin } from "rxjs";
import {AuthService} from "../../../service/auth/auth.service";
import {UtilisateurService} from "../../../service/utilisateur/utilisateur.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-dowar',
  templateUrl: './list-dowar.component.html',
  styleUrls: ['./list-dowar.component.scss']
})
export class ListDowarComponent implements OnInit, AfterViewInit {

  dowars: Dowar[] = [];
  searchTerm: string = '';
  villes: Ville[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  isAdminApp: boolean = false;
  isPresidantAssociation: boolean = false;

  constructor(
    private serviceDowar: DowarService,
    private serviceVille: VilleService,
    private cdRef: ChangeDetectorRef,
    private serviceUtilisateur : UtilisateurService
  ) { }

  ngOnInit(): void {
    this.serviceUtilisateur.getUsersWithRole('AdminApp').subscribe(userRoles => {
      this.isAdminApp = userRoles && Array.isArray(userRoles);
    });
    this.serviceUtilisateur.getUsersWithRole('PresidantAssociation').subscribe(userRoles => {
      this.isPresidantAssociation = userRoles && Array.isArray(userRoles);
    });
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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceDowar.deleteDowar(id, {responseType: 'text'}).subscribe((response) => {
          const responseCode = Number(response);
          if (responseCode === 0) {
            this.dowars = this.dowars.filter(dowar => dowar.id !== id);
            this.cdRef.detectChanges();
            Swal.fire(
              'Deleted!',
              'Dowar has been deleted.',
              'success'
            )
          } else {
            Swal.fire(
              'Failed!',
              'Failed to delete the dowar.',
              'error'
            )
          }
        });
      }
    })
  }
  get totalPages(): number {
    return Math.ceil(this.dowars.length / this.pageSize);
  }

  get pages(): number[] {
    const pagesArray: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }

  setPage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
}
