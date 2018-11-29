import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { SearchDashboardDto } from '../../core/dto/search-dashboard.dto';
import { SearchApiService } from '../../core/api/search-api.service';

@Component({
  selector: 'my-bar',
  templateUrl: './my-bar.component.html',
  styleUrls: ['./my-bar.component.scss']
})
export class MyBarComponent implements OnInit {
  searchResults: SearchDashboardDto;
  resetSearch;

  constructor(public _userService: UserService, private search: SearchApiService) {}

  ngOnInit() {
    this.resetSearch = false;
  }

  onSearchChanged(query) {
    if (!query) {
      this.searchResults = null;
    } else {
      this.search.getSearch(query).subscribe((result) => {
        this.searchResults = result;
      });
    }
  }
}
