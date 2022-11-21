import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FilesUsers} from "../model/files-users";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class ProfilesImgService extends BaseService<FilesUsers>{

  constructor(http:HttpClient) {
    super(http);
    this.basePath = '/api/v1/filesusers';
  }
}
