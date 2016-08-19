module.exports = (input) =>
  input
    .replace(/([\n\r])/g, ' ')
    .replace(/<br\/>/g, '\n');
