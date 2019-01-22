import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from 'src/app/models/models.model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }

  loadModels(): Observable<Model[]> {
   
    return this.http.get<any>(environment.api+`models`)
    .pipe(map(data => {
      console.log(data);
      return data.results;
    }));
  }
}
