var Car = require( __src + "0000-classes" );

describe( "Car", function () {
  var myCar;

  beforeEach( function () {
    myCar = new Car( "ford" );
  } );

  it( "displays its info", function () {
    expect( myCar.getInfo() ).toBe( "ford 2012" );
  } );
} );
