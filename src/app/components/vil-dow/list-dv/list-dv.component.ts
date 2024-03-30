import {Component, NgIterable, OnInit} from '@angular/core';
import {Dowar} from "../../../model/Dowar";
import {DowarService} from "../../../service/dowar/dowar.service";


@Component({
  selector: 'app-list-dv',
  templateUrl: './list-dv.component.html',
  styleUrls: ['./list-dv.component.scss']
})
export class ListDvComponent implements OnInit {

  dowars: Dowar[] = [];
  numberOfKafila: number;
villes : Dowar[] = [];

  constructor(private dowarService: DowarService) { }

  ngOnInit(): void {
    // Récupérer les dowars pour chaque ville ici, puis pour chaque dowar :
    this.dowars.forEach(dowar => {
      this.getKafilaCountForDowar(dowar.id);
    });
  }

  getKafilaCountForDowar(dowarId: number): void {
    this.dowarService.getKafilaCountForDowar(dowarId).subscribe(
        (count: any) => {
         this.numberOfKafila = count;
      },
        (error: any) => {
        console.log('Une erreur s\'est produite lors de la récupération du nombre de kafila pour le dowar', error);
      }
    );
  }

}
