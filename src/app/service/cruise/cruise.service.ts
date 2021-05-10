import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CruiseDTO } from '../../dto/cruiseDTO';

@Injectable({
  providedIn: 'root'
})
export class CruiseService {

  constructor(private http: HttpClient) { }

  getAllCruises(): Observable<Array<CruiseDTO>> {
    return this.http.get<Array<CruiseDTO>>('http://localhost:8080/cruise');
  }

  filterCruises(date:string, minDuration:number, maxDuration:number): Observable<Array<CruiseDTO>> {
    return this.http.get<Array<CruiseDTO>>('http://localhost:8080/cruise/filter?date='+date+'&minDuration='+minDuration+'&maxDuration='+maxDuration);
  }

  getUserCruises(): Observable<Array<CruiseDTO>>{
    return this.http.get<Array<CruiseDTO>>("http://localhost:8080/cruise/getUserCruises")
  }

  getCruiseById(id: number): Observable<CruiseDTO> {
    return this.http.get<CruiseDTO>('http://localhost:8080/cruise/'+id);
  }
}
