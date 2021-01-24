import { Component, OnInit } from '@angular/core';
import { Company } from '../../../app/model/company';
import { CompanyService } from '../../../app/services/company.service';

@Component({
  selector: 'app-add-new-company',
  templateUrl: './add-new-company.component.html',
  styleUrls: ['./add-new-company.component.scss']
})
export class AddNewCompanyComponent {

  public company: Company;
  
  constructor(private companyService: CompanyService) {
    this.initializeCompany();
  }

  initializeCompany() {
    this.company =  {
      Name: '',
      Exchange: '',
      Ticker: '',
      Isin: '',
      website : '',
    };
  }

  addNewCompany(companyForm) {
    if (companyForm.valid) {
      console.error('New Company is valid');
      console.error(this.company.Name);

      this.companyService.addNewCompany(this.company)
          .subscribe((result: any) => {
            this.initializeCompany();
          });
    } else {
      console.error('New Company is in an invalid state');
    }
  }
}