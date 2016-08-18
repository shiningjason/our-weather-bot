const moment = require('moment');

module.exports = {
  item(xml, i) {
    const matches = /<item>((?:[\r\n]|.)*?)<\/item>/g.exec(xml);
    if (!matches) throw new Error(`No item tag exists in given xml:\n${xml}`);
    if (matches.length <= i + 1) throw new Error(`${i + 1}th item is not exists in given xml:\n${xml}`);

    const item = matches[i + 1];
    return {
      pubDate() {
        const matches = /<pubDate>(.*)<\/pubDate>/.exec(item);
        if (!matches) throw new Error(`No pubDate tag exists in item:\n${item}`);
        return moment(matches[1], 'ddd, D MMM YYYY H:m:s Z').valueOf();
      },
      description() {
        const matches = /<description>((?:[\r\n]|.)*?)<\/description>/.exec(item);
        if (!matches) throw new Error(`No description tag exists in item:\n${item}`);
        return matches[1];
      }
    };
  }
};
