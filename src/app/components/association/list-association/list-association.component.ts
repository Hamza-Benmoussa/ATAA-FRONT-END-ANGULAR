import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Association } from "../../../model/Association";
import { AssociationService } from "../../../service/association/association.service";
import { VilleService } from "../../../service/ville/ville.service";
import { UtilisateurService } from "../../../service/utilisateur/utilisateur.service";
import {Ville} from "../../../model/Ville";
import {DataTable} from "simple-datatables";
import {forkJoin} from "rxjs";
import {Utilisateur} from "../../../model/Utilisateur";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-association',
  templateUrl: './list-association.component.html',
  styleUrls: ['./list-association.component.scss']
})
export class ListAssociationComponent implements OnInit,AfterViewInit{
  associations: Association[] = [];
  villes: Ville[] = [];
  utilisateurs:   Utilisateur[]= [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private serviceAssociation: AssociationService,
              private utilisateurService: UtilisateurService,
              private villeService: VilleService,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadData();
    setInterval(() => {
      this.loadData();
    }, 30000);
  }
  ngAfterViewInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
  loadData(): void {
    forkJoin({
      associations: this.serviceAssociation.getAssociations(),
      villes: this.villeService.getVilles(),
      utilisateurs: this.utilisateurService.getUsersWithRole('PresidantAssociation')
    }).subscribe(({ associations, villes, utilisateurs }) => {
      this.associations = associations;
      this.villes = villes;
      this.utilisateurs = utilisateurs;
      this.cdRef.detectChanges();
    });
    }

  searchAssociations(): void {
    if (this.searchTerm.trim() !== '') {
      this.associations = this.associations.filter(association =>
        this.getVilleNameById(association.villeId).toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.loadData();
    }
  }
  getVilleNameById(villeId: number): string {
    const ville = this.villes.find(v => v.id === villeId);
    return ville ? ville.nomVille : 'Unknown Ville'; // Return 'Unknown Ville' if no matching ville found
  }
  getPresidantNameById(presidantId: number): string {
    const presidant = this.utilisateurs.find(u => u.id === presidantId);
    return presidant ? presidant.nomComplete : 'Unknown Presidant'; // Return 'Unknown Presidant' if no matching presidant found
  }
  deleteAssociation(id: number): void {
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
        this.serviceAssociation.deleteAssociation(id, {responseType: 'text'}).subscribe((response) => {
          const responseCode = Number(response);
          if (responseCode === 0) {
            this.associations = this.associations.filter(association => association.id !== id);
            this.cdRef.detectChanges();
            Swal.fire(
              'Deleted!',
              'Association has been deleted.',
              'success'
            )
          } else {
            Swal.fire(
              'Failed!',
              'Failed to delete the association.',
              'error'
            )
          }
        });
      }
    })
  }
  get totalPages(): number {
    return Math.ceil(this.associations.length / this.pageSize);
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
