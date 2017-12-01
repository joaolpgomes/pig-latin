import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
      <div class="search-container">

        <input
            #search
            type="text"
            name="search"
            [ngModel]="searchValue"
            (keyup.enter)="translate()"
            (ngModelChange)="onChange($event)"
            placeholder="Enter name or sentence"
            class="search-container__input"/>

        <button
            type="button"
            class="search-container__button"
            (click)="translate()">
            Translate
        </button>

      </div>
    `
    ,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

    @Output()
    public onTranslate: EventEmitter<string> = new EventEmitter();

    searchValue: string;

    /**
     * @description
     * Bindings the search
     */
    onChange(search: string) {
      this.searchValue = search;
    }


    /**
     * @description
     * Emits search value
     */
    translate() {
      if (this.searchValue && this.searchValue.length > 0) {
        this.onTranslate.emit(this.searchValue);
      }
    }
}
