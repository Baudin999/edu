var utils = require('./utils');

utils.newSection('JAVASCRIPT THE BASICS');


/*
JavaScript is a multi-paradigm programming language. Almost every
popular programming language these days is multi-paradigm, but in
the case of JavaScript this is not clear. To quote Douglas 
Crockford, the Abraham of JavaScript programming: "JavaScript
is the world's most misunderstood programming language."

This quote is not entirely out of place, JavaScript is one of the 
only programming languages people tend to "just write", without
properly learning it. This document will cover the basics of 
programming in JavaScript and will also show a few patterns which
are widly used within the language. 

I hope that at the end of this tutorial you will see that 
JavaScript is an elegant and really powerfull language which can
stand up to most of the other modern languages. 
*/

/*
FUNCTIONAL PROGRAMMING
-----------------------------------------------------------------
Functional programming is one of those terms which is used to 
describe a way of programming in which functions are the main
aspects of the language. In JavaScript there is no difference 
between a function and an object other than that a function can
be invoked and an object can't.

Functions will be discussed at length later on in this tutorial,
I will now focus on some aspects which are needed in order to get 
rolling with JavaScript.
*/

/*
JavaScript does not require you to stick to the signature of your
function. And because it is loosly typed there is no return type
specified. The following example shows how to define a function in
JavaScript:
*/

function multiply (x, y) {
    return x * y;
};

/*
Just like every other statement in JavaScript we end function
statements and function expressions with a semicolon. JavaScript
has automatic semicolon insertion but you would be well adviced 
to discount that feature and add the semicolos yourself. 

You invoke the method as folows:
*/

var multiplicationOfNumbers = multiply( 3, 4 );
console.log( multiplicationOfNumbers );

/*
Because you do not have to specify the number of arguments of a
function with the invocation of the function a function has a 
member called arguments which behaves like an Array but isn't
you can use this arguments member to iterate over the parameters
of the function like so:
*/

function multiply2 () {
    var result = 1;
    for (var i = 0; i < arguments.length; ++i) {
        result = result * arguments[i];
    }
    return result;
};

console.log( multiply2(2,3,4) );

/*
Because JavaScript is a functional language (not a pure functional 
language, but a functional language none the less) we should write
our code more declaratively. So in this case we could reduce the 
list of arguments, but first we'd need to create an array from the
arguments. This is very strange and don't worry about the syntax 
yet, we'll get to this cast in a later chapter.
*/
function multiply3 () {
    var args = Array.prototype.slice.call(arguments, 0);
    return args.reduce(function (a, b) {
        return a * b;
    }, 1);
};

console.log( multiply3( 2, 3, 4, 10 ) );

/*
Declarative programming is not something which can be explained
easilly. It is something which you must develop feeling for over
the course of many years. The short description is: "Do not tell 
the computer how to do it, tell it what to do."

So in the case of the reduce we told the computer that we wanted
to reduce the array of arguments to a single integer by 
multiplying the current value by the next value. How the computer
then runs through the list is no longer our problem. It might
parallelize the execution or send it off to some server, we don't
know and we should not care!

EDIT: { 
  In the next segment I will use very terse notation, this is not 
  because I do not want people to be able to read my code, but it
  is because this is the type of code we'll be seeing a lot in 
  librairies from other sources.
};

Here is a list of the different array opperations which you can
natively do in JavaScript and which should always take president
over the 'for' loop:
*/
var namesArray = ['Carlos', 'Siegert', 'Bjorn', 'Ferdinand']; 
console.log(
    (function (names) {
        names.forEach(function (item, index, theArray) {
            theArray[index] = index + '  ' + item;
        });
        return names;
    }(namesArray)));
    
console.log(
    (function (names) {
        return names.map(function (name, index) {
            return index + '  ' + name; 
        });
    }(namesArray)));
  

(function (numbers) {
    /*
    The 'some' function stops looping the first time
    the itterator returns true
    */
    numbers.some(function (number) {
        console.log( number );
        return number % 5 === 0;
    });
}([1,2,3,4,5,6,7,8,9]));

(function (numbers) {
    /*
    The 'every' function stops looping the first time
    the itterator returns true
    */
    numbers.every(function (number) {
        console.log( number );
        return number % 5 !== 0;
    });
}([1,2,3,4,5,6,7,8,9]));

console.log(
    (function (numbers) {
        return numbers.filter(function (number) {
            return number % 3 === 0;
        });
    }([1,2,3,4,5,6,7,8,9])));

/*
OBJECTS
-------------------------------------------------------
Objects in JavaScript might be the second most disliked
feature of the language. JavaScript uses prototypal 
inherritance instead of the classical inherritance. 
JavaScript also lacks classes. Classes "define" the 
type of an object.  
*/
utils.newSection('OBJECTS');

utils.newSection('objects in JavaScript');

/*
Defining an object in JavaScript is really easy. You 
specify the actual object instead of the contract,
this is called writing an object literal:
*/
var person = {
    firstName: 'Peter',
    lastName: 'Taal',
    yell: function (words) {
        console.log( words );
    }
};

person.yell('HELLO IQUALITY!');

/* we can later augment the object: */

person.whisper = function (words) {
    console.log( words );
};

person.whisper('Shhh....hello iquality');

/*
As you can see, objects can be modified at runtime.
If you want to disable this functionality you can 
freeze the object:
*/

Object.freeze( person );

person.extraProperty = 'nothing';
console.log( person );

/*
JavaScript is a loosly typed language. This does not
mean that JavaScript does not have types. It means that
you do not have to specify them at design time. An example 
of the typing in JavaScript:
*/
utils.newSection('types in JavaScript');

/*
Here we can see that the number 30 is cast to a string:
*/
console.log ( 'Ik ben: ' + 30 + ' jaar oud.' );


/*
We can varify this by running the next piece of code:
*/
console.log( typeof 30 );
console.log( typeof 'Peter Taal' );

/*
We got the results 'number' and 'string'. Everything in 
JavaScript has a type, we can even do some type cohersion:
*/

console.log( typeof +'30' );
console.log( typeof Number('30') );
console.log( parseInt('10') + ' is of type: ' + typeof parseInt('10') );

/*
Now lets get back to our object and see of what type this
object is:
*/
console.log( typeof person );

/*
As we can see, person is of type 'object'. But what if we wanted
to be more specific. 'object' is quite general and maybe we'll 
want to make some decisions based on the type of the object.

Here we get to constructor functions. A constructor function is
a function which automatically gets a new object as it's function
context (we'll discuss function context in the next chapter). 
If it does not return an object it returns it's function context.
Lets see how this works:
*/
utils.newSection('custom types');
function Human () {}
var human = new Human();
console.log (typeof human);

/* 
This still prints out 'object'. But wait, we have another keyword
in JavaScript called 'instanceof' which might help:
*/
console.log ( human instanceof Human );
console.log ( human instanceof Object );

/*
This is cool. Now we can test for types. A simple pattern for
inherritance could be:
*/
utils.newSection('inherritance');
function Person () {}
Person.prototype = Human.prototype;

var peter = new Person();
console.log ( 'Peter is a Person? ' + (human instanceof Person) );
console.log ( 'Peter is a Human?  ' + (human instanceof Human) );
console.log ( 'Peter is a Object? ' + (human instanceof Object) );
console.log();

/*
But wait, what is this 'prototype' property on the object, I
did not specify this!

Every object in JavaScript has a prototype chain. This links
our classes together and creates a path at runtime which can
be used to find properties and methods on the object through
the inherritance chain.

Prototypal inherritance is something which comes from the 
language 'self'. There are only two ways of programming in an
object orriented way, the first is classical OOP the way we 
all know and *shivers* love in C#. Twenty years later, 
developed by industry giants we get this new form called 
prototypal inherritance. This was not done out of ignorance,
but because these people really thought it was better...and 
it is.

Without going into too much detail about the history and the
art of programming I want to spend a little time on this
subject. Before you start programming in a classical language
you neet to know the entire taxonomy if the system. The other
option is continuous refactoring. In JavaScript, when you
programm correct JavaScript you do not have these issues.
*/



/*
FUNCTION SCOPE
-----------------------------------------------------------------
In JavaScript we do not have block scope, but function scope. This
means that variables live for the duration of a function and not
for the duration of a block like 'if', or 'for'. 
*/
utils.newSection('FUNCTION SCOPE');


/*
This next example is a bit tricky because it augments an object 
with properties which in turn contain a function which closes over
the varable 'i' as defined in the parent function.

Although this example might seem foreign to you and not something
which you will encounter in the wild I can tell you from experience
that this is a very common source of errors.
*/
(function () {
    
    var list = [0,1,2,3,4,5,6,7,8,9],
        o = {};
    
    for (var i = 0; i < 10; ++i) {
        o[i] = function () {
            console.log( i );
        };
    }
    
    Object.keys(o).map(function(key) {
        o[key]();
    });
    
}());

/*
If you were to use one of the functional approaches you would not
encounter this phenomenon:
*/
(function () {
    
    var list = [0,1,2,3,4,5,6,7,8,9],
        o = {};

    list.forEach(function(item, index) {
        o[index] = function () {
            console.log( index );
        };
    });
    
    Object.keys(o).map(function(key) {
        o[key]();
    });
    
}());




utils.newSection('FUNCTIONS');


/* 
INVOKING FUNCTIONS
-------------------------------------------------------
JavaScript (for now) cannot run without a global 
object. Within the browser this object is the 
window object; which makes sense seeing how every
piece of JavaScript running in the browser runs
within a window.

This document is about functions, invoking functions
and the function context which as John Ressig points
out whould have been better called the invocation 
context.
*/



/*
C# and Java do not have functions. The closest you can 
get in C# is a static method on a static class. Even 
lambda expressions are compiled to this structure.

JavaScript does have plain functions, here we'll look 
closer at functions and see how we can use them.
*/

// a function
function sum (x, y) {
    console.log('The function context of sum is' + 
                    (this === global ? ' ' : ' not ') + 'the global object');
};
sum (1, '2');


// self executing method
var resultaat = (function telOp (a, b) {
    return a + b;
})(2,3);



// a method
var foo = {
    bar: function () {
        console.log('The function context of foo is' + 
                    (this === foo ? ' ' : ' not ') + 'foo');
    }
};
foo.bar();

// a constructor
function Constructor () {
    console.log('The function context of the constructor is' + 
                    (typeof this === 'object' ? ' ' : ' not ') + 'an object');
    
    console.log( 'It is even an empty object!!' );
    console.log( this );
};
new Constructor();



/*
It is always hard to come up with examples which are not 
so verbose as to obstruct the quality of the lesson and
yet are not cosidered demo-ware.
In this next section we will try to implement a logger.
Because this is an AngularJS course we'll call this logger
'$log'.
*/
utils.newSection('A SIMPLE LOGGER');

function $log () {
    this.history = [];
    this.info = function() {
        var logString = $log.info.apply(this, utils.parseArgs(arguments));
        this.history.push( logString );
    }
};
$log.info = function () {
    
    var args = utils.parseArgs(arguments),
        logString;
    
    if (!(typeof this === 'function')) {
    }
    
    logString = args.map(function (arg, index) {
        // This type check is only for 'show'; toString is 
        // automatically called when we want to output a
        // value.
        var argString = (arg instanceof String) ? arg : arg.toString();
        return index + '\t' + argString;
    }).join('\n');
    
    console.log(logString);
    
    return logString;
};

$log.info('Peter', 'Taal', 'is hier', 'aanwezig');

console.log();

var logger = new $log();
logger.info('With history!');
logger.info('Cheap', 'Trick');
console.log(logger);



