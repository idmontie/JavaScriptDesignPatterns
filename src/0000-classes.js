/**
 * A Car Class
 */
function Car( model ) {
  this.model = model;
  this.color = "silver";
  this.year  = "2012";

  this.getInfo = function () {
    return this.model + " " + this.year;
  };
}

module.exports = Car;