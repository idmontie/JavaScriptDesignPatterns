var myModule = require( __src + "0030-object-literals" );

describe( "Object Literal", function () {
  it( "has properties", function () {
    expect( myModule.key ).toBe( "value" );
  } );

  it( "can speak", function () {
    expect( myModule.speak() ).toBe( "Woof" );
  } );
} );