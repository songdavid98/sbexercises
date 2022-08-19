function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
}

/* Write an ES2015 Version */
const filterOutOddsES2015 = (...nums) => nums.filter( num => num % 2 == 0 );
console.log( filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9) );
console.log( filterOutOddsES2015(1, 2, 3, 4, 5, 6, 7, 8, 9) );

const findMin = (...nums) => nums.reduce( (acc, next) => (acc < next) ? acc : next );
console.log( findMin(1, 2, 3, 4) );
console.log( findMin(1, 2, 3, 0, 4) );

const mergeObjects = (o1, o2) => ({ ...o1, ...o2});
console.log(mergeObjects({a:1, b:2}, {c:3, d:4}));

const doubleAndReturnArgs = ( arr, ...rest) => [...arr, ...(rest.map(num => num*2 ))];
console.log( doubleAndReturnArgs([1,2,3],4,4) ); // [1,2,3,8,8]
console.log(doubleAndReturnArgs([2],10,4)); // [2, 20, 8]

/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = items => {
    let i = Math.floor(Math.random() * items.length);
    return [...items.slice(0, i), ...items.slice(i + 1)];
}

/** Return a new array with every item in array1 and array2. */
const  extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => ({...obj, key:val});

/** Return a new object with a key removed. */
const removeKe = (obj, key) => {
    let o = {...obj};
    delete o[key];
    return o;
}

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({ ...obj1, ...obj2});

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => ({...obj, key:val});
