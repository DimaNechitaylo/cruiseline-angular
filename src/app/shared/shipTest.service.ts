import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShipModel } from './ship-model';

@Injectable({
  providedIn: 'root'
})
export class ShipTestService {

  constructor(private http: HttpClient) { }

  getAllShips(): Observable<Array<ShipModel>> {
    return this.http.get<Array<ShipModel>>('http://localhost:8080/api/ship/test');
  }
}
