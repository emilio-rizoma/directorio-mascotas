import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DetailResponse, PetDetailI } from 'src/app/shared/models/api.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {
  private endpoint: string;
  private httpOptions = { withCredentials: true };
  constructor(private httpClient: HttpClient) {
    this.endpoint = environment.apiUrl;
  }

  // READ REQUEST
  read(param?: any): Observable<PetDetailI> {
    let option = { 
      withCredentials: this.httpOptions.withCredentials,
      params: param
    };
    return this.httpClient.get(`/v1/images/search`, option).pipe(
      map((res: any) => {
        return res.pop() as PetDetailI;
      })
    )
  }

  // LIST REQUEST
  list(): Observable<DetailResponse[]> {  

    return this.httpClient.get(`/v1/breeds`, this.httpOptions).pipe(
      map((res: any) => {
        return res as DetailResponse[];
      })
    )
  }
}
