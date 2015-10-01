var AbstractFactoryPattern = require( __src + "0150-abstract-factory-pattern" );
var abstractVehicleFactory = AbstractFactoryPattern.Factory;
var Car = AbstractFactoryPattern.Car;
var Truck = AbstractFactoryPattern.Truck;


describe( "Abstract Factory Pattern", function () {
  abstractVehicleFactory.registerVehicle( "car", Car );
  abstractVehicleFactory.registerVehicle( "truck", Truck );

  it( "can create cars", function () {
    var car = abstractVehicleFactory.getVehicle( "car", {
            color: "lime green",
            state: "like new" } );

    expect( car ).toEqual( jasmine.any( Car ) );
  } );

  it( "can create cars", function () {
    var truck = abstractVehicleFactory.getVehicle( "truck", {
            wheelSize: "medium",
            color: "neon yellow" } );

    expect( truck ).toEqual( jasmine.any( Truck ) );
  } );
  
} );
