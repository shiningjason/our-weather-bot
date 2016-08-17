import { expect } from 'chai';

import beautifyArticle from 'lib/utils/beautifyArticle';

describe('utils', () => {
  describe('beautifyArticle', () => {
    it('should strip leading and trailing whitespaces', () => {
      const input = ' \n hello, world \n \n ';
      const expected = 'hello, world';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should trim internal whitespace between english words', () => {
      const input = 'apple  and   orange';
      const expected = 'apple and orange';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should trim internal whitespace between english word and number', () => {
      const input = 'I\'m  25   years old';
      const expected = 'I\'m 25 years old';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should trim internal whitespace between chinese characters', () => {
      const input = '目前 天  氣';
      const expected = '目前天氣';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should preserve one space after chinese character which is followed by english', () => {
      const input = '台北rain';
      const expected = '台北 rain';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should preserve one space after chinese character which is followed by spaces and english', () => {
      const input = '台北  rain';
      const expected = '台北 rain';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should preserve one space after chinese character which is followed by number', () => {
      const input = '溫度32';
      const expected = '溫度 32';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should preserve one space after chinese character which is followed by spaces and number', () => {
      const input = '溫度  32';
      const expected = '溫度 32';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should preserve one space after english word which is followed by chinese', () => {
      const input = 'Taipei晴天';
      const expected = 'Taipei 晴天';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should preserve one space after english word which is followed by spaces and chinese', () => {
      const input = 'Taipei  晴天';
      const expected = 'Taipei 晴天';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should preserve one space after number which is followed by chinese', () => {
      const input = '32晴天';
      const expected = '32 晴天';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should preserve one space after number which is followed by space and chinese', () => {
      const input = '32  晴天';
      const expected = '32 晴天';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should strip whitespaces before and after fullwith symbols', () => {
      const input = '台北 ： rain ， 溫度適中';
      const expected = '台北：rain，溫度適中';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should strip whitespaces before halfwidth symbols', () => {
      const input = '台北 : rain , 溫度適中';
      const expected = '台北: rain, 溫度適中';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should trim whitespaces after halfwidth symbols', () => {
      const input = 'At 4p.m.    at the Hong Kong';
      const expected = 'At 4p.m. at the Hong Kong';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should strip whitespaces before line breaks', () => {
      const input = 'At 4p.m.  \n  \nat the Hong Kong';
      const expected = 'At 4p.m.\n\nat the Hong Kong';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should strip whitespaces before the line', () => {
      const input = 'At 4p.m.\n  at the Hong Kong';
      const expected = 'At 4p.m.\nat the Hong Kong';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });
  });
});
