module.exports = (input) =>
  input
    .trim()
    .replace(/(\w)\s\s+(?=\w)|([!,.:;?~])\s\s+(?=\S)|([^\x00-\xff])\s*(?=\w)|(\w)\s*(?=[^\x00-\xff])/g, '$1$2$3$4 ')
    .replace(/([^\x00-\xff])\s+(?=[^\x00-\xff])|([\uFF00-\uFFFF])\s+(?=\S)|(\S)\s+(?=[\uFF00-\uFFFF]|[!,.:;?~])/g, '$1$2$3');
