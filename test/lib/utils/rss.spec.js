import { expect } from 'chai';

import RSS from 'lib/utils/rss';

const rssSample = `
  <rss version="2.0">
  <channel>
      <title>Current Weather</title>
      <link>http://www.weather.gov.hk</link>
      <description></description>
      <item>
        <pubDate>Thu, 18 Aug 2016 00:02:00 GMT</pubDate>
        <description><![CDATA[
          hello,<br/>world
        ]]></description>
      </item>
  </channel>
  </rss>`;

describe('utils', () => {
  describe('RSS', () => {
    describe('item(xml, i)', () => {
      it('should extract first item publish date in unix timstamp (ms)', () => {
        const expected = 1471449720000;

        const actual = RSS.item(rssSample, 0).pubDate();

        expect(actual).to.equal(expected);
      });

      it('should extract first item description', () => {
        const expected = `<![CDATA[
          hello,<br/>world
        ]]>`;

        const actual = RSS.item(rssSample, 0).description();

        expect(actual).to.equal(expected);
      });
    });
  });
});
