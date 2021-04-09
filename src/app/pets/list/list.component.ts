import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { DialogService } from 'src/app/core/services/dialog.service';
import { DogApiService } from 'src/app/core/services/dog-api.service';
import { DetailResponse } from 'src/app/shared/models/api.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  petList: DetailResponse[] | null = null;
  constructor(
    private router: Router,
    private dogService: DogApiService,
    private modalService: DialogService
  ) { }

  ngOnInit(): void {
    this.listPets();

  }

  openModal(breed: DetailResponse) {
    this.modalService.open(breed);
  }

  detailsWith(id: number) {
    this.router.navigateByUrl(`details/${id}`);
  }

  listPets() {
    this.dogService.list().pipe(take(1)).toPromise().then(res => {
      this.petList = res;
    })
  }

}
