'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/* identity function is setup to return an agrument unchanged
*example identity(5) result 5
*@param {value} value any value.
*@return {value} wil return value */

function identity(value) {
        return value;
    }

module.exports.identity = identity;

/* typeOf take any agruments and will return it as as string
/* example typeOf(12); result number
/* if value is equal to null and then it will return null;
/* Array.isArray(value) will check if that value is an array and return array if its array.
*@param {value} it will return its type of value */

function typeOf (value) {
    if (typeof value === "number") return "number";
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value;
    }
    
module.exports.typeOf = typeOf;

/*first takes 2 parameter: array and number, then return the first number of an 
array. 
/*number is undefinded is comparing if number is undefinded or doesnt have value and its also checking if its not a number.
/* number is ===2 is checking if the number is two and returning the arrays  and slicing the at 0 index and finsihing at second index.
/* number <0 is saying if the number is less than 0 return an emety array.
/* number >array.length  is checking the length of the array and checking if number is greater than array length and returning the rarray.
/* finally its the array sliced up from 0 postion and to the final number.
Example first(['a','b','c'], 2); result ['a','b']
*@param {array} array as an argrument and will get a new array return with index[0] if given
*@param {number} number of elements that will return starting at the index[0] 
*/
function first(array, number) {
    if(!Array.isArray(array)) return []; 
    if(number === undefined || isNaN(number)) return array[0];
    if(number === 2) return array.slice(0, 2);
    if(number < 0) return [];
    if(number > array.length) return array;
    return array.slice(0, number);
}

module.exports.first = first;

/* Use a number and an array as agruments and return 
the last <number>  
/* first function last has two pramater array and number.
/* its checking if its not a array then return an emety arrray.
/* checking if number is undefined or is not a number and returning the array backwords.
/*its also checking if number is less than 1 it will return an emety array 
/* checking if the number is greater than the length of the array to return the full array.
*Example - last(['a','b','c'],2) result ['b','c']
*@param {array}- first parameter . 
*@param {number}-second paramter.
*/

function last (array, number ) {
    if(!Array.isArray(array)) return []; 
    if(number === undefined || isNaN(number)) return array[array.length-1];
    if(number < 1) return [];
    if(number > array.length) return array;
    return array.slice(array.length - number);
}

module.exports.last = last;

/*an array and value use as agruments and 
return the <array> index of given <value> of an array.
/*the for loop it looops throuugh the whole array and increase by +1.
Returns -1 if <value> is not in <array>
*Example - _.indexOf(['a','b','c'], 'c') results 2
*Example _.indexOf(['a','b','c'], 'd') results -1
*@param {array}
*@param {value}
*/

function indexOf(array, value) {
var foundIndex = -1;
for(var i = 0; i < array.length; i++) {
    if(array[i] === value ) {
        return i;
    } 
}
return -1;
}

module.exports.indexOf = indexOf;

/* 
*two prameters col and test .
/* createrd a emety array filterted to store all of the data in.
/*we use the each function to check each element. we use our first paramter in each and then we created an anomnous function
with 3 parameters value pos an call.
/* then we compare test with value and pos and coll. and push the values of the emety array.
*Example - _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
*@param {coll}-first paramter collection
*@param {test}-second parameter (action) basically used to run our code.
*/

function filter(coll, test) {
var filtered = [];
  each(coll, function(value, pos, coll) {
      if (test(value, pos, coll)) {filtered.push(value); }
});
    return filtered;
}
module.exports.filter = filter;

/* created a function reject with two parameters array and funtwo.
created a emety array named filtered.
/* called the filter from above and put array and anomyonus function 
/* finally we check if  paramter two is not value,pos,array, then we push the values into the array.
/*finally we returned filtered to get the result..
*Example - _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*@param {array}
*@param {funTwo}
*/

function reject(array, funTwo) {
var filtered = [];    
    filter(array, function(value, pos, array) {
        if(!funTwo(value, pos, array)) {filtered.push(value); }
    });
    return filtered;
}

module.exports.reject = reject;

/* created function partition with two parameters array and test.
* created an emety array to store the stuff in the array.
* pushed the my array  with calling the function filter from above and having two parameters. also calling the reject function
/* finally returning my array to get the result.
*Example -
*@param {array}-first parametr arugement.
*@param {test}-second parameter arugement.
*/
function partition(array, test) {
var myArray = [];
myArray.push(filter(array,test), reject(array,test));
return myArray;
    
};
module.exports.partition = partition;


/* calling the function unique.
/* putting an var called myARray and then having an emety array.
/* calling the each function from above to get each element.
/* comparing if indexof and my array with value is -1 basically saying if nothing is in the array then it gives u -1
/* pushing the value into my array.
*Example _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*@param {array} parameter that we going to be used for arguements . when calling the function.
*/

function unique(array) {
var myArray = [];    
    each(array, function(value, pos, array) {
        if(indexOf(myArray, value) === -1) { 
            myArray.push(value);
            
        }
    }); 
   return myArray; 
};
module.exports.unique = unique;

/* created a function map with two parameters collect and test.
* called each function from above and put collect as one parameter and then putting a annomyus function.
*pushing the stuff to myArray we push the second parameter value index and the array.
* returning my array.to get the results.
*Example -_.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*@param {collect}
*@param {test}
*/

function map(collect, test) {
var myArray = [];
each(collect, function(value, index, array){
    myArray.push(test(value,index,array));
    
});
return myArray;
};
module.exports.map = map;

/* created a function pluck with two parameters objects and prop.
* created an emety array.
* calling the map function from above and putting the two parameters  and  making an annomus function.
*Example - _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*@param {objects} used for first arugement
*@param {prop}-used for second arguement.
*/
function pluck(objects, prop) {
    var myArray = [];
    map(objects, function(obj) {
        myArray.push(obj[prop]);
    });
    return myArray;
};
module.exports.pluck = pluck;

/* use array and value as agruments and return true if array contains value
or return false otherwise. instead of using if/else statments, 
the codes are in ternary syntax.
*creating function called contains with two parameters array and value
* checking if the value is less than one if it is set to false  checking through the array index of values is not there returning false or true
*Example - contains([1,'two', 3.14], 'two') -> true
*@param {array} <array> any type of an array
*@param {values} any type of <values> is being search in <array.
*/
function contains(array, values) {
return values < 1 ? false : array.indexOf(values) === -1 ? false : true;
};
module.exports.contains = contains;


/* created function every with two parameters .
*created a variable result and setting its value to true;
* comparing if the typeof action  is not a function .
calling the each function and setitng two parametes one with colelct and other we are creating as a annomuys function.
* if the parameters action is  value and index and array is not there and then returning the result as false.
else just return the results.

*Example - _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*@param {collect}
*@param {action}
*/
function every(collect, action){
    var results = true;
if (typeof(action) !== "function") action = _.identity;

each(collect, function(value, index, array) {
    if(action(value, index, array) === false) {
        results = false;
    }
});
        return results;
};
module.exports.every = every;

/* some calls action function for each element of collect and return true,
if the return value of action function returns true for at least element,
it is false otherwise.
* creating a function some and having two parameters collect and action.
creating an varaible called result and setting its value to false;
 checking if the action parameter value is undefined .
 *calling the each function and having two parmeters first one collection and the second creating an anomuous function
 setting functions parameters to value index and array.
 *comparing if the parameter action  value and index and array is true if so the results going to be true.
 else return results.
*Example -   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
     *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*@param {collect}-first parameter  used for first arugment when calling the function.
*@param {action}-second parameter used for second arugment to compare .
*/
function some(collect, action) {
var results = false;
    if(action === undefined) {
        action = identity;
    }
each(collect, function(value, index, array) {
    if(action(value, index, array) === true) {
        results = true;
    }
});
        return results;    
};
module.exports.some = some;

/* creating function reduce with three parameters.
* created a variabled called summ and set it to the seed;
* compared if parameter seed  is undefined and setting summ to collection and divding first index by 1;
* calling each function from above and having two parameters collection(first parameter) and second one creating anomyuous function
* and setting summ to equal to parameter action .
*returning the summ.
*Example _.reduce([1,2,3], function(prev, curr){ return prev + curr}) -> 6
*@param {collection}
*@param {action}
*@param {seed}
*/
var reduce = function(col, fun, seed) {
 let combined=seed;
 let i=0;
   if(combined===undefined){
      combined=col[0]; 
       i++
   }
   for(; i<col.length;i++){
    
    combined=fun(combined,col[i],i,col);
   }  return combined;
 }


/* extend takes more than one object agruments to have each properties copied
*Example -  *   var data = {a:"one"};
     *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
     *   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*@param {ob1} pass more than one objects, if <obj1> passed their properties 
are copy and return the updated objects

*/

function extend(ob1) {
         each(arguments, function(ob2){
             each(ob2, function(value, key, collection){
                 ob1[key] = value;
             });
         });
         return ob1;
     };
module.exports.extend = extend;