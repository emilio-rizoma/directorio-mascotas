import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { DogApiService } from 'src/app/core/services/dog-api.service';

interface ListPetI {
  id: number;
  name: string;
  origin: string | undefined;
}

// interface ImageI {
//   width?: number,
//   height?: number,
//   url: string
// }

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  petList: ListPetI[] | null = null;
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private dogService: DogApiService
  ) { }

  ngOnInit(): void {
    this.listPets();
  }

  detailsWith(id: number) {
    this.router.navigateByUrl(`details/${id}`);
  }

  listPets() {
    // Real API request...
    this.dogService.list().pipe(take(1)).toPromise().then(res => {
      console.log(res);
    })
    this.httpClient.get<ListPetI[]>('assets/data/dummy.json').pipe(take(1)).toPromise().then(res => {
      this.petList = res.map(m => {
        return {
          id: m.id,
          name: m.name,
          origin: m.origin
        }
      });
    });
  }

}
