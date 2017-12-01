export class Search {

  private _original: string;
  private _translated: string;

  constructor(original: string, translated: string) {
    this._original = original;
    this._translated = translated;

  }


  get original() {
    return this._original;
  }


  get translated() {
    return this._translated;
  }

}
