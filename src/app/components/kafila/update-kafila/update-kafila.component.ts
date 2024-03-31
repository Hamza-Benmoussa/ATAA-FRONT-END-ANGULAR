import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { KafilaService } from '../../../service/kafila/kafila.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-kafila',
  templateUrl: './update-kafila.component.html',
  styleUrls: ['./update-kafila.component.scss']
})
export class UpdateKafilaComponent implements OnInit, OnDestroy {
  statusForm: FormGroup;
  kafilaId: number;
  private subscription: Subscription;

  constructor(private fb: FormBuilder,
              private kafilaService: KafilaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.kafilaId = this.route.snapshot.params['id'];
    this.statusForm = this.fb.group({
      arrivedKafila: [false],
    });

    this.subscription = this.kafilaService.getKafilaById(this.kafilaId).subscribe(data => {
      this.statusForm.patchValue({
        arrivedKafila: data.arrivedKafila
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateStatus() {
    this.kafilaService.updateKafila(this.kafilaId, this.statusForm.value).subscribe( response => {
    const responseCode = Number(response);
    if (responseCode === 0) {
      Swal.fire({
        title: 'Success!',
        text: 'Kafila updated successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        this.router.navigateByUrl("/kafila/list-kafila");
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to update kafila.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
    })
  }
}
