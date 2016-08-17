module.exports = (input) =>
  input
    .trim()
    .replace(/(\w)\s\s+(?=\w)/g, '$1 ')
    .replace(/([^\w\s])\s+(?=[^\w\s])/g, '$1');
