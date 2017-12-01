import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from './services/app.service';
import { Search } from './models/search.model';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  template: `

   <div id="app">

      <h1>Pig Latin Converter</h1>

      <app-search
        (onTranslate)="translate($event)">
      </app-search>

      <app-search-history
        [search]="search">
      </app-search-history>

    </div>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search: Search;

  constructor(private appService: AppService) {}

  /**
   * @description
   * Translates search
   */
  translate(searchValue: string) {
      if (this.search === undefined || this.search.original !== searchValue) {
        const translated = this.appService.translate(searchValue);
        this.search = new Search(searchValue, translated);
      }
  }

}
