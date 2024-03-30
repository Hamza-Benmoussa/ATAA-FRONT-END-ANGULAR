import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BiensEssantiel} from "../../../model/BiensEssentiel";
import {BienEssentielService} from "../../../service/bienEssentiel/bien-essentiel.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.scss']
})
export class ListBienComponent implements OnInit {

  biens : BiensEssantiel[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 5;
  constructor(private serviceBien : BienEssentielService,
              private cdRf : ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadData();
    setInterval(() => {
      this.loadData();
    }, 30000);
  }
  loadData():void{
    this.serviceBien.getBiensEssentiels().subscribe((biens: BiensEssantiel[]) => {
      this.biens = biens;
      this.cdRf.detectChanges();
    });
  }
  searchBiens(): void {
    if (this.searchTerm.trim() !== '') {
      this.biens = this.biens.filter(bien =>
        bien.nomBiens.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.loadData();
    }
  }
  deleteBiensEssentiel(id: number): void {
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
        this.serviceBien.deleteBiensEssentiel(id, {responseType: 'text'}).subscribe((response) => {
          const responseCode = Number(response);
          if (responseCode === 0) {
            this.biens = this.biens.filter(biensEssentiel => biensEssentiel.id !== id);
            this.cdRf.detectChanges();
            Swal.fire(
              'Deleted!',
              'BiensEssentiel has been deleted.',
              'success'
            )
          } else {
            Swal.fire(
              'Failed!',
              'Failed to delete the biensEssentiel.',
              'error'
            )
          }
        });
      }
    })
  }
  get totalPages(): number {
    return Math.ceil(this.biens.length / this.pageSize);
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
