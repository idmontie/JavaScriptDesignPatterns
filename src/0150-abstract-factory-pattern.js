/**
 * Abstract Factory Pattern
 *
 * Encapsulate a group of individual factories with
 * a common goal. Separate the details of implementation of
 * a set of objects from their general usage.
 */
function Car( options ) {
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
}

function Truck( options ) {
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

var abstractVehicleFactory = ( function () {
  var types = {};

  return {
    getVehicle: function ( type, customizations ) {
      var Vehicle = types[type];

      return (Vehicle ? new Vehicle( customizations ) : null );
    },
    registerVehicle: function ( type, Vehicle ) {
      var proto = Vehicle.prototype;

      types[type] = Vehicle;

      return abstractVehicleFactory;
    }
  };
} )();

module.exports = {
  Car: Car,
  Truck: Truck,
  Factory: abstractVehicleFactory
};
