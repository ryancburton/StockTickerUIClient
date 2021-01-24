import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../app/services/company.service';

@Component({
  selector: 'app-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.scss']
})
export class CompaniesTableComponent implements OnInit {

  title = 'app';

    columnDefs = [
        {headerName: 'Name', field: 'name', sortable: true },
        {headerName: 'Exchange', field: 'exchange', sortable: true },
        {headerName: 'Ticker', field: 'ticker', sortable: true},
        {headerName: 'Isin', field: 'isin', sortable: true },
        {headerName: 'website', field: 'website', sortable: true },
    ];

    rowData = this.companyService.getCompanies();

    constructor(private companyService: CompanyService) { }

  ngOnInit(): void {  
    console.log('ngOnInit');

    let type = [
      { value: "Aerospace", viewValue: "Aerospace" },
      { value: "Auto Repair", viewValue: "Auto Repair" }];
    this.rowData.subscribe(data => console.log(data));//{ data.forEach( element => { this.Fuck.push(element.Ticker); }); });
    
   }
}
