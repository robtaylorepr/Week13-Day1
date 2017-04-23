/********************************
Unit Test Example
********************************/
//module( "../jsanddom.js" );
// Example unit test function
function divide( a, b ) {
   // To see the test pass, uncomment the following line
   return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
   return s.split("").reverse().join("");
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
   return values.min()
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
   let unique = [...new Set(myArray)];
   return unique
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    console.log(FizzBuzz(i));
   }
}
function FizzBuzz(i){
  var expletive = '';
  if (i % 3 === 0) expletive += 'Fizz';
  if (i % 5 === 0) expletive += 'Buzz';
  return expletive
}


// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
  var set = new SortedSet(fruits);
  var differenceSet = set.difference(fruitsToRemove);
  return differenceSet.toArray();
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
   if( Object.prototype.toString.call( someVar ) === '[object Array]' ) {
     for (var index=0;index<array.length;index+=1){
         array.push(toPush[index]);
     }
   }
   else{
     array.push(toPush)
   }
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
   var answer = sourceStr.split(',')
   if (answer == ''){
     return [];
   }
   else{
     return answer;
   }
}

// Write a function that will take any number of arguments and return their sum
function sum(array) {
  var sum = array.reduce(function(previousValue, currentValue){
  return currentValue + previousValue;
  });
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
  var mystring = str1.replace(/^\s+|\s+$/g, '') ;
  if (myString.length == 0){
    return true;
  }
  else{
     return false;
  }
}

test( "divide Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' );

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});

test( "reverseString Test", 1, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    // Make sure the result from the divide function is valid
    ok( reverseString( 'magic'), 'cigam', 'Expected cigam as the result, the result was: ' + reverseString('magic'));
});

test( "findMinValue Test", 1, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    // Make sure the result from the divide function is valid
    ok( findMinValue( [9, 3] ), 3, 'Expected 3 as the result, the result was: ' + findMinValue([4, 2]) );
});


test( "findDistinctValues Test", 1, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

    // Make sure the result from the divide function is valid
    ok( findDistinctValues( [1,2,2,3,4,5] ), [1,2,3,4,5], 'Expected [1,2,3,4,5] as the result, the result was: ' + findDistinctValues([1,2,2,3,4,5]) );
});

test( "FizzBuzz Test", 0, function() {
    // Verify the method exists
    equal( typeof FizzBuzz, 'function', 'Must contain a FizzBuzz function' );

    // Make sure the result from the divide function is valid
    ok( FizzBuzz(1),  1,           'Expected 1 as the result, the result was: ' + FizzBuzz() );
    ok( FizzBuzz(2),  2,           'Expected 2 as the result, the result was: ' + FizzBuzz() );
    ok( FizzBuzz(3),  'Fizz',      'Expected Fizz as the result, the result was: ' + FizzBuzz() );
    ok( FizzBuzz(4),  4,           'Expected 4 as the result, the result was: ' + FizzBuzz() );
    ok( FizzBuzz(5),  'Buzz',      'Expected Buzz as the result, the result was: ' + FizzBuzz() );
    ok( FizzBuzz(15), 'FizzBuzz',  'Expected FizzBuzz as the result, the result was: ' + FizzBuzz() );
});

test( "removeFruits Test", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

    // Make sure the result from the divide function is valid
    ok( removeFruits( [1,2,3], [2] ), 2, 'Expected [1,3] as the result, the result was: ' + removeFruits( [1,2,3], [2] ) );
});

test( "pushOntoArray Test", 2, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

    // Make sure the result from the divide function is valid
    ok( pushOntoArray( [1,2,3], 4), [1,2,3,4], 'Expected [1,2,3,4] as the result, the result was: ' + pushOntoArray( [1,2,3], 4 ) );
    ok( pushOntoArray( [1,2,3], [4,5]), [1,2,3,4,5], 'Expected [1,2,3,4,5] as the result, the result was: ' + pushOntoArray( [1,2,3], [4,5] ) );
});

test( "splitListStrUsingComma Test", 1, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

    // Make sure the result from the divide function is valid
    ok( splitListStrUsingComma('magic'), ['m','a','g','i','c'], "Expected ['m','a','g','i','c'] as the result, the result was: " + splitListStrUsingComma('magic') );
});

test( "sum Test", 1, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' );

    // Make sure the result from the sum function is valid
    ok( sum( [4,2] ), 6, 'Expected 6 as the result, the result was: ' + sum([4,2]) );
});

test( "isOnlyWhitespace Test", 1, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );

    // Make sure the result from the divide function is valid
    ok( isOnlyWhitespace( '  ' ), true, "Expected true as the result, the result was: " + isOnlyWhitespace( '  ' ) );
});
