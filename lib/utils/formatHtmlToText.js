import beautifyArticle from './beautifyArticle';

module.exports = (input) => {
  const text = input
    .replace(/([\n\r])/g, ' ')
    .replace(/<br\/>/g, '\n')
    .replace(/(<(?:[\r\n]|.)*?>)/g, ' ');
  return beautifyArticle(text);
};
