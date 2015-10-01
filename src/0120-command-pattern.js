/**
 * The Command Pattern
 *
 * Encapsulate method invocation, requests, or operations into
 * a single object.
 *
 * 
 */
var Manager = function () {
  this.execute = function () {}
};

var CarManager = function () {
  // request information
  this.requestInfo = function( model, id ){
    return "The information for " + model + " with ID " + id + " is foobar";
  },

  // purchase the car
  this.buyVehicle = function( model, id ){
    return "You have successfully purchased Item " + id + ", a " + model;
  },

  // arrange a viewing
  this.arrangeViewing = function( model, id ){
    return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
  }
};

CarManager.prototype = Manager.prototype;

CarManager.prototype.execute = function ( name ) {
    return this[name] && this[name].apply( this, [].slice.call(arguments, 1) );
};

module.exports = CarManager;