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
      const input = 'hello   hi  world';
      const expected = 'hello hi world';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should trim internal whitespace between english word and number', () => {
      const input = 'I\'m   25 years old';
      const expected = 'I\'m 25 years old';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should trim internal whitespace between chinese characters', () => {
      const input = '目 前  天  氣';
      const expected = '目前天氣';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should preserve one space after chinese character which is followed by english', () => {
      const input = '天氣sun';
      const expected = '天氣 sun';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });

    it('should preserve one space after chinese character which is followed by number', () => {
      const input = '溫度123';
      const expected = '溫度 123';

      const actual = beautifyArticle(input);

      expect(actual).to.equal(expected);
    });
  });
});
