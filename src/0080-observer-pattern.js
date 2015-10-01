/**
 * Observer Pattern
 *
 * An object maintains a list of object depending on it,
 * it automatically notifying them of any changes to state.
 *
 * Subject: maintains a list of observers, facilitates adding or removing observers
 * Observer: provides an update interface for objects that need to be notified of a Subject's changes of state
 * ConcreteSubject: broadcasts notifications to observers on canges of states, stores the state of Concrete Observers
 * ConcreateObserver: stores a reference to the ConcreateSubject, implements an update interface for the Observer
 *                    to ensure state is consisten with the Subject's
 */

/*
 |------------------------------------------
 | Observer List
 |------------------------------------------
 |
 | Store the observers a subject may have 
 */

function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function ( obj ) {
  return this.observerList.push( obj );
}

ObserverList.prototype.count = function () {
  return this.observerList.length;
}

ObserverList.prototype.get = function ( index ) {
  if ( index > -1 && index < this.observerList.length ) {
    return this.observerList[ index ];
  }
}

ObserverList.prototype.indexOf = function ( obj, startIndex ) {
  var i = startIndex || 0;

  while ( i <  this.observerList.length ) {
    if ( this.observerList[i] === obj ) {
      return i;
    }

    i++;
  }

  return -1;
}

ObserverList.prototype.removeAt = function ( index ) {
  this.observerList.splice( index, 1 );
}

/*
 |------------------------------------------
 | Subject
 |------------------------------------------
 |
 | Add, remove, and notify observers of the
 | observer list
 */
function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function ( observer ) {
  this.observers.add( observer );
}

Subject.prototype.removeObserver = function ( observer ) {
  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
}

Subject.prototype.notify = function ( context ) {
  var observerCount = this.observers.count();

  for ( var i = 0; i < observerCount; i++ ) {
    this.observers.get( i ).update( context );
  }
}

/*
 |------------------------------------------
 | Observer
 |------------------------------------------
 |
 | Update functionality
 */
function Observer() {
  this.update = function () {}
}

module.exports = {
  ObserverList : ObserverList,
  Subject : Subject,
  Observer : Observer
}