import { TestBed, async, inject } from '@angular/core/testing';

import { AppService } from './app.service';

describe('TranslateService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService]
    });

  });

  it('should translate to pig latin when word starts with vowel', inject([AppService], (service: AppService) => {
    expect(service.translate('every')).toBe('everyway');
    expect(service.translate('omelet')).toBe('omeletway');
    expect(service.translate('another')).toBe('anotherway');
    expect(service.translate('under')).toBe('underway');
  }));


  it('should translate to pig latin when word starts with consonant', inject([AppService], (service: AppService) => {
    expect(service.translate('Pig')).toBe('igpay');
    expect(service.translate('cheers')).toBe('eerschay');
    expect(service.translate('smile')).toBe('ilesmay');
    expect(service.translate('thanks')).toBe('anksthay');
  }));


  it('should translate to pig latin with multiple words', inject([AppService], (service: AppService) => {
    expect(service.translate('Parkmobile looks great')).toBe('arkmobilepay ookslay eatgray');
    expect(service.translate('Cool stuff')).toBe('oolcay uffstay');
  }));
});

