import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() {}

  translate(search: any) {
    const words = search.split(' '),
     result = [],
     regExp = /[aeiou]/gi;  // case insensative vowels

    words.forEach(word => {
      let wordResult = word.split('');

      if (word[0].match(regExp)) { // is the first letter a vowel?

        wordResult.push('way');

      }else {

        for (let i = 0; i < word.length; i++) {
          if (!(word[i].match(regExp))) {
              wordResult.push(wordResult.shift().toLowerCase());
          }else {
            break;
          }
        }

        wordResult.push('ay');

      }

      wordResult = wordResult.join('');

      result.push(wordResult);

    });

    return result.join(' ');

  }
}
