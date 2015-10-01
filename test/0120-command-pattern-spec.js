var CarManager = require( __src + "0120-command-pattern" );

describe( "Command Pattern", function () {
  var manager;

  beforeEach( function () {
    manager = new CarManager();
  } );

  it( "can execute", function () {
    expect( manager.execute( "arrangeViewing", "Ferrari", "14523" ) ).toBe(
      "You have successfully booked a viewing of Ferrari ( 14523 ) "
    );
  } );  
} );
