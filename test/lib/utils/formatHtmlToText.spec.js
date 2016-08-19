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

    it('should replace \`<br/>\` to \`\\n\`', () => {
      const input = 'At 9p.m.<br/>at the Hong Kong';
      const expected = 'At 9p.m.\nat the Hong Kong';

      const actual = formatHtmlToText(input);

      expect(actual).to.equal(expected);
    });

    it('should replace \`<tag>\` to \` \`', () => {
      const input = 'At 9p.m.<img src="..." />at the Hong Kong';
      const expected = 'At 9p.m. at the Hong Kong';

      const actual = formatHtmlToText(input);

      expect(actual).to.equal(expected);
    });

    it('should call beautifyArticle to format text', () => {
      const input = `  
        <img src="http://rss.weather.gov.hk/img/pic54.png" style="vertical-align: middle;"><br/><br/>  
        下 午 3 時    
        天 文 台 錄 得：<br/>
        氣 溫 ： 30 度<br/>
        相 對 濕 度 ： 百 分 之 85<br/>
        過 去 一 小 時  ，  
        京 士 柏 錄 得 的 平 均 紫 外 線 指 數 ： 5<br/>
        紫 外 線 強 度 ： 中 等 <br/>
        
      `;

      const expected = '下午 3 時天文台錄得：\n'
        + '氣溫：30 度\n'
        + '相對濕度：百分之 85\n'
        + '過去一小時，京士柏錄得的平均紫外線指數：5\n'
        + '紫外線強度：中等';

      const actual = formatHtmlToText(input);

      expect(actual).to.equal(expected);
    });
  });
});
