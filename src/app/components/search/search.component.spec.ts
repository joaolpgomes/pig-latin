import { TestBed, async } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';


describe('Search Component', () => {

  let comp: SearchComponent;
  let fixture: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ],
      imports: [
        FormsModule
      ]
    });

    fixture = TestBed.createComponent(SearchComponent);
    comp = fixture.componentInstance;
  }));


  it('should emit search value', async(() => {
    spyOn(comp.onTranslate, 'emit');
    comp.searchValue = 'This is great';

    comp.translate();

    expect(comp.onTranslate.emit).toHaveBeenCalledWith('This is great');
  }));


  it('shouldnt emit search value if empty', async(() => {
    spyOn(comp.onTranslate, 'emit');
    comp.searchValue = '';

    comp.translate();

    expect(comp.onTranslate.emit).not.toHaveBeenCalled();
  }));

});
