module.exports = (input) =>
  input
    .trim()
    .replace(/(\w)\s\s+(?=\w)/g, '$1 ');
