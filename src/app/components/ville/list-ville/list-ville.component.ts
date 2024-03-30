import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataTable} from "simple-datatables";
import {VilleService} from "../../../service/ville/ville.service";
import {Ville} from "../../../model/Ville";
import Swal from "sweetalert2";

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
        this.serviceVille.deleteVille(id, {responseType: 'text'}).subscribe((response) => {
          const responseCode = Number(response);
          if (responseCode === 0) {
            this.villes = this.villes.filter(ville => ville.id !== id);
            this.cdRef.detectChanges();
            Swal.fire(
              'Deleted!',
              'Ville has been deleted.',
              'success'
            )
          } else {
            Swal.fire(
              'Failed!',
              'Failed to delete the ville.',
              'error'
            )
          }
        });
      }
    })
  }

}
