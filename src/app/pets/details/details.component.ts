import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

interface DetailPetI {
  id: number;
  name: string;
  origin: string;
  life_span: string;
  temperament: string;
  image: { url: string, width: string, heith: string };
  bred_for: string;
  weight: PetSizeI;
  height: PetSizeI;
}

interface PetSizeI {
  imperial: string;
  metric: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  petId: number = 0;
  petDetail: DetailPetI | null = null;
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    this.getDetails();
  }

  ngOnInit(): void {
    this.petId = Number(this.route.snapshot.paramMap.get('id'));
    // this.getDetails();
  }

  getDetails() {
    // Real API request...
    this.httpClient.get<DetailPetI[]>('assets/data/dummy.json').pipe(take(1)).toPromise().then(res => {
      this.petDetail = res.filter(f => f.id == this.petId).pop() as DetailPetI;
      console.log(this.petDetail);

    });
  }

}
