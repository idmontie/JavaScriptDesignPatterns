var pubsub = require( __src + "0090-publish-subscribe-pattern" );

describe( "Publish-Subscribe Pattern", function () {
  var counter = 0;

  beforeEach( function () {
    counter = 0;
  } );

  it( "allows listening on topics", function () {
    pubsub.subscribe( "inbox", function () {
      counter++; 
    } );

    pubsub.publish( "inbox" );

    expect( counter ).toBe( 1 );
  } );

  it( "does not respond to publications on different channels", function () {
    pubsub.subscribe( "inbox", function () {
      counter++; 
    } );

    pubsub.publish( "nope" );

    expect( counter ).toBe( 0 );
  } );

  // TODO test unsubscribe
} );