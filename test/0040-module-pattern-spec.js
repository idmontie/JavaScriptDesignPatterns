var myModule = require( __src + "0040-module-pattern" );

describe( "Module Pattern", function () {
  it( "does not expose counter", function () {
    expect( myModule.counter ).toBeUndefined();
  } );

  it( "increases the private counter", function () {
    expect( myModule.increment() ).toBe( 1 );

    myModule.increment();
    myModule.increment();

    expect( myModule.increment() ).toBe( 4 );
  } );
} );