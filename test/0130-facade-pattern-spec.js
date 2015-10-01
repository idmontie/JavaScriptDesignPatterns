var myModule = require( __src + "0130-facade-pattern" );

describe( "Facade Pattern", function () {
  it( "reveals a facade", function () {
    var result = myModule.facade( {run: true, val: 10} );
    expect( result.val ).toBe( 10 );
    expect( result.run ).toBe( "running" );
  } );
} );