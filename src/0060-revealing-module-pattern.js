/**
 * Revealing Module
 *
 * Prefix variables and functions with public and private,
 * then strip the public part of the variable names that 
 * are exposed.
 *
 * Watch out, if a privat function refers to a public function,
 * then that public function cannot be overriden, because the
 * private function will ALWAYS refer to the original function.
 */
var myRevealingModule = ( function () {
  var publicMyVar  = 'test';
  var privateMyVar = 'Woof';

  var publicSpeak = function () {
    return privateMyVar;
  }
  return {
    myVar : publicMyVar,
    speak : publicSpeak
  }
} )();

module.exports = myRevealingModule;