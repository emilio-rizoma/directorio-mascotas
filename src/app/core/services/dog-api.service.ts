import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface ListPetI {
  id: number;
  name: string;
  origin: string | undefined;
}

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
  read(param?: any): Observable<any> {
    let option = { 
      withCredentials: this.httpOptions.withCredentials,
      params: param
    };
    return this.httpClient.get(`/v1/breeds/search`, this.httpOptions).pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  // LIST REQUEST
  list(): Observable<any> {  

    return this.httpClient.get(`/v1/breeds`, this.httpOptions).pipe(
      map((res: any) => {
        return res;
      })
    )
  }
}
