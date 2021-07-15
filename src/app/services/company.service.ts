import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Company } from '../../app/model/company';
import { Search } from '../../app/model/search';

@Injectable()
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCompanies() : Observable<Company[]> {
    return this.http.get<Company[]>('/api/company/GetAllCompanies');
  }

  getThesisText(search: Search) : Observable<any>{
    //const headers = new HttpHeaders().append('header', 'value');
    const params = new HttpParams().append('search_string', search.Text);
    
    //params.append('left_len', '20');
    //params.append('right_len', '20');
    return this.http.get('/api/company/SearchText', {params, responseType: 'text'})
  }

  addNewCompany(company: Company): Observable<any> {
    return this.http.post('/api/Company/PostCompany', company);
  }
}

