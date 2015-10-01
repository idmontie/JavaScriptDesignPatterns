/**
 * Prototype Pattern
 *
 * Create objects through a template and cloning
 *
 * This is basically the default for JavaScript
 */
var beget = (function () {
 
    function F() {}
 
    return function ( proto ) {
        F.prototype = proto;
        return new F();
    };
})();