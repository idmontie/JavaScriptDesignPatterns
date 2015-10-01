var Car = require( __src + "0020-constructors-with-prototypes" );

describe( "Constructor with Prototypes", function () {
  var civic, mondeo;

  beforeEach( function () {
    civic = new Car( "Honda Civic", 2009, 20000 );
    mondeo = new Car( "Ford Mondeo", 2010, 5000 );
  } );

  it( "has a toString method", function () {
    expect( civic.toString() ).toBe( "Honda Civic has done 20000 miles" );
    expect( mondeo.toString() ).toBe( "Ford Mondeo has done 5000 miles" );
  } );
} );
