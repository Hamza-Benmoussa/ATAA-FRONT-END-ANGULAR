import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { KafilaService } from '../../../service/kafila/kafila.service';
import { DowarService } from '../../../service/dowar/dowar.service';
import { Kafila } from '../../../model/Kafila';
import { Dowar } from '../../../model/Dowar';
import {BiensEssantiel} from "../../../model/BiensEssentiel";
import {BienEssentielService} from "../../../service/bienEssentiel/bien-essentiel.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-kafila',
  templateUrl: './list-kafila.component.html',
  styleUrls: ['./list-kafila.component.scss']
})
export class ListKafilaComponent implements OnInit {
  kafilas: Kafila[] = [];
  dowars: Dowar[] = [];
  biensEssentiels: BiensEssantiel[] = [];
  currentPage: number = 1;
  searchTerm: string = '';
  pageSize: number = 5;

  constructor(private kafilaService: KafilaService, private dowarService: DowarService,
              private biensEssentielService: BienEssentielService,
              private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.loadKafilas();
    setInterval(() => {
      this.loadKafilas();
    }, 30000);
    this.loadDowars();
    this.loadBiensEssentiels();
  }

  convertTimestampToDate(timestamp: Date): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }
  searchKafilasByDowar(): void {
    if (this.searchTerm.trim() !== '') {
      this.kafilas = this.kafilas.filter(kafila =>
        this.getDowarNameById(kafila.dowarId).toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.loadKafilas();
    }
  }

  loadKafilas(): void {
    this.kafilaService.getKafilas().subscribe(
      data => {
        this.kafilas = data;
      },
      error => console.log(error));
  }

  loadDowars(): void {
    this.dowarService.getDowars().subscribe(
      data => {
        this.dowars = data;
      },
      error => console.log(error));
  }

  loadBiensEssentiels(): void {
    this.biensEssentielService.getBiensEssentiels().subscribe(
      data => {
        this.biensEssentiels = data;
      },
      error => console.log(error));
  }

  getDowarNameById(id: number | undefined): string {
    const dowar = this.dowars.find(d => d.id === id);
    return dowar ? dowar.nomDowars : '';
  }

  getBiensEssentielNameById(id: number): string {
    const biensEssentiel = this.biensEssentiels.find(b => b.id === id);
    return biensEssentiel ? biensEssentiel.nomBiens : '';
  }

  deleteKafila(id: number | undefined): void {
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
        this.kafilaService.deleteKafila(id, {responseType: 'text'}).subscribe((response) => {
          const responseCode = Number(response);
          if (responseCode === 0) {
            this.kafilas = this.kafilas.filter(dowar => dowar.id !== id);
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
    return Math.ceil(this.kafilas.length / this.pageSize);
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
