/**
 * Sub-Classing
 */
var Person = function ( firstName, lastName ) {
  this.firstName = firstName;
  this.lastName  = lastName;
  this.gender    = "male";
}

var SuperHero = function( firstName, lastName, powers ) {
  Person.call( this, firstName, lastName );

  this.power = powers;
}

SuperHero.prototype = Person.prototype;

module.exports = {
  Person : Person,
  SuperHero : SuperHero
};
