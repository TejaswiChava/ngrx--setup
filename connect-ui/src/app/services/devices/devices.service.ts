import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from 'src/app/models/devices.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private http: HttpClient) { }

  loadDevices(): Observable<Device[]> {
   
    return this.http.get<any>(environment.api+`devices?sort=boxId`)
    .pipe(map(data => {
      console.log(data);
      return data.results;
    }));
  }

}
