import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Patient} from "../model/patient";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientsService extends BaseService<Patient>{

  constructor(http:HttpClient) {
    super(http);
    this.basePath = '/api/v1/patients';
  }
}
