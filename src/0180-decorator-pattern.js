/**
 * Decorators
 *
 * A structural design pattern that aims to promote code
 * re-use.
 *
 * Add behavior to systems dynamically.
 */
function MacBook() {
  this.cost = function () { return 997; };
  this.screenSize = function () { return 11.6 };
}

function memory( macbook ) {
  var v = macbook.cost();
  macbook.cost = function () {
    return v + 75;
  };
}

module.exports = {
  MacBook : MacBook,
  memory : memory
};
