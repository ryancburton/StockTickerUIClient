import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';  

import { AppComponent } from './app.component';
import { CompaniesTableComponent } from './company/companies-table/companies-table.component';
import { AddNewCompanyComponent } from './company/add-new-company/add-new-company.component';
import { CompanyService } from '../app/services/company.service';
import { SearchTextComponent } from './company/search-text/search-text.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesTableComponent,
    AddNewCompanyComponent,
    SearchTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,    
    AgGridModule.withComponents([])
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
