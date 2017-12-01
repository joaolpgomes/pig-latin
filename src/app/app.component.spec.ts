import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppService } from './services/app.service';
import { Search } from './models/search.model';
import { AppSearch } from './components/search-history/search.component';

describe('App Component', () => {

  let comp: AppComponent;
  let fixture: any;
  let service: AppService;

  const AppServiceStub = {
    translate: () => {
      return 'translated';
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AppService, useValue: AppServiceStub}
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    service = fixture.debugElement.injector.get(AppService);
    comp = fixture.componentInstance;
  }));

});
