var Subclassing = require( __src + "0160-subclassing" );
var SuperHero = Subclassing.SuperHero;
var Person = Subclassing.Person;

describe( "Subclassing", function () {
  it( "is the SuperClass and the SubClass", function () {
    var superman = new SuperHero( "Clark", "Kent", ["flight", "heat-vision"] );

    expect( superman ).toEqual( jasmine.any( Person ) );
    expect( superman ).toEqual( jasmine.any( SuperHero ) );
  } ); 
} );
