/**
 * Module Pattern Imports
 */
var anotherModule = {
  speak : function () {
    return "Woof";
  }
};

var myModule = ( function ( _ ) {
  return {
    speak : function () {
      return _.speak();
    }
  }
} )( anotherModule );

module.exports = myModule;