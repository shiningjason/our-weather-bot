module.exports = (input) =>
  input
    .trim()
    .replace(/(\w)\s\s+(?=\w)|([^\x00-\xff])\s*(?=\w)|(\w)\s*(?=[^\x00-\xff])/g, '$1$2$3 ')
    .replace(/([^\x00-\xff])\s+(?=[^\x00-\xff])/g, '$1');
