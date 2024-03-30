import {AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Association} from "../../../model/Association";
import {Member} from "../../../model/Member";
import {DataTable} from "simple-datatables";
import {MemberService} from "../../../service/member/member.service";
import {forkJoin} from "rxjs";
import {AssociationService} from "../../../service/association/association.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.scss']
})
export class ListMemberComponent implements OnInit ,AfterViewInit {

  members: Member[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 5;
  constructor(private memberService : MemberService ,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getMember();
    setInterval(() => {
      this.getMember();
    }, 30000);
  }

  ngAfterViewInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
  getMember(): void {
    this.memberService.getMembers().subscribe((members: Member[]) => {
      this.members = members;
      this.cdRef.detectChanges();
    });
  }
  loadData():void{
    forkJoin({
      members: this.memberService.getMembers(),
    }).subscribe(({ members }) => {
      this.members = members;
      this.cdRef.detectChanges();

    });
  }
  searchMembers(): void {
    if (this.searchTerm.trim() !== '') {
      this.members = this.members.filter(member =>
        member.nomMembres.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.loadData();
    }
  }
  deleteMember(id: number): void {
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
        this.memberService.deleteMember(id, {responseType: 'text'}).subscribe((response) => {
          const responseCode = Number(response);
          if (responseCode === 0) {
            this.members = this.members.filter(member => member.id !== id);
            this.cdRef.detectChanges();
            Swal.fire(
              'Deleted!',
              'Member has been deleted.',
              'success'
            )
          } else {
            Swal.fire(
              'Failed!',
              'Failed to delete the member.',
              'error'
            )
          }
        });
      }
    })
  }
  get totalPages(): number {
    return Math.ceil(this.members.length / this.pageSize);
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
