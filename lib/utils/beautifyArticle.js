module.exports = (input) =>
  input
    .trim()
    .replace(/(\w)\s\s+(?=\w)|([^\x00-\xff])(?=\w)/g, '$1$2 ')
    .replace(/([^\w\s])\s+(?=[^\w\s])/g, '$1');
