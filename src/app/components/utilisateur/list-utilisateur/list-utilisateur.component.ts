import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DataTable } from 'simple-datatables';
import { UtilisateurService } from '../../../service/utilisateur/utilisateur.service';
import { Utilisateur } from '../../../model/Utilisateur';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.scss']
})
export class ListUtilisateurComponent implements OnInit, AfterViewInit {

  utilisateurs: Utilisateur[] = [];
  searchTerm: string = '';


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
    const confirmDelete = confirm('Are you sure you want to delete this user?');

    if (confirmDelete) {
      this.serviceUtilisateur.deleteUtilisateur(id).subscribe(() => {
        this.utilisateurs = this.utilisateurs.filter(user => user.id !== id);
        this.cdRef.detectChanges();
      });
    }
  }
}
