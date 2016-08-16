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
  });
});
