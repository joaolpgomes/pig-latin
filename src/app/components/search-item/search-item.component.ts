import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Search } from '../../models/search.model';

@Component({
  selector: 'app-search-item',
  template: `
      <div class="search-item">
        <div class="search-item__container">
          <span class="search-item__label">
            Original
          </span>
          <div class="search-item__value">
            {{search.original}}
          </div>
        </div>
        <div class="search-item__container">
          <span class="search-item__label">
            Translated
          </span>
          <div class="search-item__value">
            {{search.translated}}
          </div>
        </div>
      </div>
    `,
    styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {

    @Input()
    search: Search;
}
