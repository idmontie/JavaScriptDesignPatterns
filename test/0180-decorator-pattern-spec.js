var DecoratorPattern = require( __src + "0180-decorator-pattern" );
var MacBook = DecoratorPattern.MacBook;
var memory = DecoratorPattern.memory;

describe( "Decorator Pattern", function () {
  var mb;

  beforeEach( function () {
    mb = new MacBook();
  } );

  it( "does not need to be decorated", function () {
    expect( mb.cost() ).toBe( 997 );
  } );

  it( "can be decorated", function () {
    memory( mb );

    expect( mb.cost() ).toBe( 997 + 75 );
  } );
} );
