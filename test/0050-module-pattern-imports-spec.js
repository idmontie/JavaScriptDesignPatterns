var myModule = require( __src + "0050-module-pattern-imports" );

describe( "Module Pattern with imports", function () {
  it( "can speak", function () {
    expect( myModule.speak() ).toBe( "Woof" );
  } );
} );