var Pattern  = require( __src + "0080-observer-pattern" );
var Subject  = Pattern.Subject;
var Observer = Pattern.Observer;

describe( "Observer Pattern", function () {
  var counter = 0;

  it( "sends notifications to subscribers", function () {
    var subject = new Subject();
    var check   = new Observer();
    check.update = function () {
      counter = 10;
    }

    subject.addObserver( check );

    expect( counter ).toBe( 0 );

    subject.notify();

    expect( counter ).toBe( 10 );
  } );

  // TODO it supports multiple listeners
  
  // TODO it can remove listeners
} );
