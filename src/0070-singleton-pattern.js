/**
 * The Singleton Pattern
 */
var mySingleton = ( function () {
  var instance;

  function init() {
    return {
      speak : function () {
        return "Woof";
      }
    }
  }

  return {
    getInstance: function () {
      if ( ! instance ) {
        instance = init();
      }

      return instance;
    }
  };
} )();

module.exports = mySingleton;