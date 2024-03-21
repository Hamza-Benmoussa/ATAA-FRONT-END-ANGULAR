import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BiensEssantiel} from "../../../model/BiensEssentiel";
import {BienEssentielService} from "../../../service/bienEssentiel/bien-essentiel.service";

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
    this.serviceBien.getBiens().subscribe((biens: BiensEssantiel[]) => {
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
  deleteBien(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this bien?');

    if (confirmDelete) {
      this.serviceBien.deleteBien(id).subscribe(() => {
        this.loadData();
      });
    }
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
