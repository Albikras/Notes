/**
 * generate a randomn set of numbers and letters for the id
 */
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
