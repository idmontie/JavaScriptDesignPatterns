/**
 * Module Pattern
 */
var myModule = (function () {
  var counter = 0;

  return {
    increment : function () {
      counter++;
      return counter;
    }
  };
})();

module.exports = myModule;