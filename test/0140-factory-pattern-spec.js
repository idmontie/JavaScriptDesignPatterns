var FactoryPattern = require( __src + "0140-factory-pattern" );
var VehicleFactory = FactoryPattern.Factory;
var Car            = FactoryPattern.Car;
var Truck          = FactoryPattern.Truck;

describe( "Factory Pattern", function () {
  var factory;

  beforeEach( function () {
    factory = new VehicleFactory();
  } );

  it( "can construct a car", function () {
    var car = factory.createVehicle( {
      vehicleType: "car",
      color: "yellow",
      doors: 6
    } );

    expect( car ).toEqual( jasmine.any( Car ) );
  } );

  it( "can construct a car", function () {
    var truck = factory.createVehicle( {
      vehicleType: "truck",
      color: "yellow",
      doors: 6
    } );

    expect( truck ).toEqual( jasmine.any( Truck ) );
  } );
} );