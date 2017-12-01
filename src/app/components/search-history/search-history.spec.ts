import { TestBed, async } from '@angular/core/testing';
import { SimpleChange, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchHistoryComponent } from './search-history.component';
import { Search } from '../../models/search.model';


describe('Search History Component', () => {

  let comp: SearchHistoryComponent;
  let fixture: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        SearchHistoryComponent
      ],
      imports: [
        FormsModule
      ]
    });

    fixture = TestBed.createComponent(SearchHistoryComponent);
    comp = fixture.componentInstance;
  }));


;

  it('should translate, add to history and remove old searches', async(() => {
    for (let i = 0; i < 10; i++) {
        comp.listHistory.push(new Search(`Pig-${i}`, 'igpway'));
    }
    expect(comp.listHistory.length).toBe(10);

    expect(comp.listHistory[9]).toEqual(new Search('Pig-9', 'igpway'));

    comp.search = new Search('Pig', 'igpway');

    comp.ngOnChanges({
      search: new SimpleChange(null, comp.search, true)
   });

    expect(comp.listHistory.length).toBe(10);

    //expect(comp.listHistory[0]).toEqual(new Search('Pig', 'igpway'));

    expect(comp.listHistory[9]).toEqual(new Search('Pig-8', 'igpway'));
  }));

});
