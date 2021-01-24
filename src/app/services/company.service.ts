import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';

import { Company } from '../../app/model/company';

@Injectable()
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCompanies() : Observable<Company[]> {
    return this.http.get<Company[]>('/api/Company/GetAllCompanies');
  }

  addNewCompany(company: Company): Observable<any> {
    return this.http.post('/api/Company/PostCompany', company);
  }
}