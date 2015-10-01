/**
 * The Facade Pattern
 *
 * A structural pattern which hides complexity of subsystems behind
 * it.
 *
 * Facades can either be separate objects or, in JavaScript, integrated
 * using the module pattern.
 *
 * The integrated version using the module pattern is shown below
 */
var myModule = ( function () {
  var _private = {
    i: 5,
    get: function () {
      return this.i;
    },
    set: function ( val ) {
      this.i = val;
    },
    run: function () {
      return "running";
    }
  };

  return {
    facade : function ( args ) {
      _private.set( args.val );
      var getVal = _private.get();

      if ( args.run ) {
        var runVal = _private.run();

        return {
          val : getVal,
          run : runVal
        }
      }

      return {
        val : getVal
      }
    }
  };
} )();

module.exports = myModule;