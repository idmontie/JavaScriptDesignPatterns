var mediator = require( __src + "0100-mediator-pattern" );

describe( "Mediator", function () {
  it( "abstracts the speaking process", function () {
    expect( mediator.speak() ).toBe( "Woof" );
  } );
} );