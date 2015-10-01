var myModule = require( __src + "0060-revealing-module-pattern" );

describe( "Revealing Module Pattern", function () {
  it( "does not expose private variables", function () {
    expect( myModule.privateMyVar ).toBeUndefined();
  } );

  it( "does expose public variables", function () {
    expect( myModule.myVar ).toBeDefined();
    expect( myModule.myVar ).toBe( "test" );
  } );

  it( "does expose public functions", function () {
    expect( myModule.speak() ).toBe( "Woof" );
  } );
} );
