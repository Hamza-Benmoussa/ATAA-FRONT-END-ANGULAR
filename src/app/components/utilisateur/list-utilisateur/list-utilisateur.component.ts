import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DataTable } from 'simple-datatables';
import { UtilisateurService } from '../../../service/utilisateur/utilisateur.service';
import { Utilisateur } from '../../../model/Utilisateur';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.scss']
})
export class ListUtilisateurComponent implements OnInit, AfterViewInit {

  utilisateurs: Utilisateur[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 5;

  constructor(private serviceUtilisateur: UtilisateurService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getUtilisateur();
    setInterval(() => {
      this.getUtilisateur();
      this.cdRef.detectChanges();
    }, 30000);
  }

  ngAfterViewInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

  getUtilisateur(): void {
    this.serviceUtilisateur.getUtilisateurs().subscribe((res) => {
      this.utilisateurs = res;
    });
  }

  searchUtilisateurs(): void {
    if (this.searchTerm.trim() !== '') {
      this.utilisateurs = this.utilisateurs.filter(user =>
        user.nomComplete.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.getUtilisateur();
    }
  }

  deleteUtilisateur(id: number): void {
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
        this.serviceUtilisateur.deleteUtilisateur(id, {responseType: 'text'}).subscribe((response) => {
          const responseCode = Number(response);
          if (responseCode === 0) {
            this.utilisateurs = this.utilisateurs.filter(user => user.id !== id);
            this.cdRef.detectChanges();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          } else {
            Swal.fire(
              'Failed!',
              'Failed to delete the file.',
              'error'
            )
          }
        });
      }
    })
  }

  get totalPages(): number {
    return Math.ceil(this.utilisateurs.length / this.pageSize);
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
