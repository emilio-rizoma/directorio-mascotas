import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { DogApiService } from 'src/app/core/services/dog-api.service';
import { DetailResponse, PetBreedI, PetDetailI } from 'src/app/shared/models/api.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit {
  petId: string | null = null;
  petDetail: DetailResponse | null = null;
  constructor(
    private route: ActivatedRoute,
    private dogService: DogApiService
  ) { }

  ngOnInit(): void {
    this.petId = this.route.snapshot.paramMap.get('name') ?? '';
    this.getDetails();
  }

  getDetails() {
    this.dogService.read({ breed_id: this.petId }).pipe(take(1)).toPromise().then(res => {
      const breed: PetBreedI = res.breeds[0];
      this.petDetail = {
        id: breed.id,
        name: breed.name,
        origin: breed.origin,
        life_span: breed.life_span,
        temperament: breed.temperament,
        image: {id: res.id, url: res.url, width: res.width, height: res.height},
        bred_for: breed.bred_for,
        weight: breed.weight,
        height: breed.height,
        wikipedia_url: breed.wikipedia_url != null ? breed.wikipedia_url : 'Unavailable'
      };
    })
  }

}
