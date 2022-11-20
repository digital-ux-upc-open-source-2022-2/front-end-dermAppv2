import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Patient} from "../model/patient";
import {Dermatologist} from "../model/dermatologist";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURLPatients = "/api/v1/patients"
  apiURLDermatologists = "/api/v1/dermatologists"

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': "application/json"})
  }
  constructor(private http: HttpClient) {}

  getPatients():Observable<Patient[]>{
    return this.http.get<Patient[]>(this.apiURLPatients, this.httpOptions);
  }
  getPatientById(id:number):Observable<Patient>  {
    return this.http.get<Patient>(`${this.apiURLPatients}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  CreatePatient(item: any): Observable<Patient>{
    return this.http.post<Patient>(this.apiURLPatients, JSON.stringify(item), this.httpOptions).
    pipe(
      retry(2)
    )
  }
  UpdatePatient(id: any,item: any): Observable<Patient>{
    return this.http.put<Patient>(`${this.apiURLPatients}/${id}`, JSON.stringify(item), this.httpOptions).
    pipe(
      retry(2)
    )
  }
  getDermatologists():Observable<Dermatologist[]>{
    return this.http.get<Dermatologist[]>(this.apiURLDermatologists, this.httpOptions);
  }
  getDermatologistsById(id:number):Observable<Dermatologist>  {
    return this.http.get<Dermatologist>(`${this.apiURLDermatologists}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  CreateDermatologists(item: any): Observable<Dermatologist>{
    return this.http.post<Dermatologist>(this.apiURLDermatologists, JSON.stringify(item), this.httpOptions).
    pipe(
      retry(2)
    )
  }
  handleError(error:HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log(`Error ocurred: ${error.error.message}`);
    } else {
      console.error(`Fake backend returned: ${error.status}, body was ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try later.'));
  }
  UpdateDermatologist(id: any,item: any): Observable<Dermatologist>{
    return this.http.put<Dermatologist>(`${this.apiURLDermatologists}/${id}`, JSON.stringify(item), this.httpOptions).
    pipe(
      retry(2)
    )
  }
}
