var mySingleton = require( __src + "0070-singleton-pattern" );

describe( "Singleton", function () {
  it( "has only one instance", function () {
    expect( mySingleton.getInstance() ).toBe( mySingleton.getInstance() );
  } );

  it( "has methods after getting an instance", function () {
    expect( mySingleton.getInstance().speak() ).toBe( "Woof" );
  } );
} );