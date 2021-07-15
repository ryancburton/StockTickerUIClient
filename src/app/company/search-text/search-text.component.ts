import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Search } from '../../../app/model/search';
import { CompanyService } from '../../../app/services/company.service';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.scss']
})
export class SearchTextComponent implements OnInit {

  public search: Search;

  constructor(private companyService: CompanyService) {
      this.search =  {
        Text: 'Enter search text.',
        Result: '',
        LLen : 20,
        RLen : 20
      };
   }

  ngOnInit(): void {
  }

  seachText(searchForm) {
    if (searchForm.valid) {
      console.log('Search is valid');

      this.companyService.getThesisText(this.search)
          .subscribe((result: any) => {
            this.search.Result = result
          });
    } else {
      console.error('New Company is in an invalid state');
    }
  }
}
