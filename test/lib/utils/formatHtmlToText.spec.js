import { expect } from 'chai';

import formatHtmlToText from 'lib/utils/formatHtmlToText';

describe('utils', () => {
  describe('formatHtmlToText', () => {
    it('should replace \`\\n\` to \` \`', () => {
      const input = 'At 9p.m.\nat the Hong Kong';
      const expected = 'At 9p.m. at the Hong Kong';

      const actual = formatHtmlToText(input);

      expect(actual).to.equal(expected);
    });
  });
});
