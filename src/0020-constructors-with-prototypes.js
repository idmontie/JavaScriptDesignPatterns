/**
 * Constructors with Prototypes
 */
function Car( model, year, miles ) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
}

module.exports = Car;