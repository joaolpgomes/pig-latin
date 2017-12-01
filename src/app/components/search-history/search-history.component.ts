import { Component, Output, EventEmitter, OnInit , Input, OnChanges, SimpleChanges} from '@angular/core';
import { Search } from '../../models/search.model';

@Component({
  selector: 'app-search-history',
  template: `
  <div class="search-history" *ngIf="listHistory.length > 0">
      <h2>Search History</h2>
      <app-search-item
          [search]="item"
          *ngFor="let item of listHistory">
      </app-search-item>
    </div>
    `,
    styleUrls: ['./search-history.component.scss']

})
export class SearchHistoryComponent implements OnChanges {

    listHistory: Search[] = [];
    private readonly MAX_SEARCHES =  10;

    @Input()
    public search: Search;

    ngOnChanges(changes: SimpleChanges) {
      if (changes.search && changes.search.currentValue) {
        if (this.listHistory.length === this.MAX_SEARCHES) { // remove old entries
          this.listHistory.pop();
        }

        this.listHistory.unshift(this.search);
      }

    }


}
