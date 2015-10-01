/**
 * Mediator Pattern
 *
 * Expose a unified interface through which the different parts of
 * a system may communicate.
 *
 * Decouple components from each other and have them go through
 * the Mediator instead.
 *
 * AKA: Helper, Business Logic
 */
var mediator = {
  getSpeaker : function () {
    // Note: this should return a new object of some class,
    // but for this example, we will just return an object
    // literal
    return {
      speak : function () {
        return "Woof";
      }
    }
  },
  speak : function () {
    var speaker = this.getSpeaker();

    return speaker.speak();
  }
};

module.exports = mediator;