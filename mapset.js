var s = new Set([1,1,2,2,3,4]);
console.log(s); //[ 1, 2, 3, 4 ]

s = [...new Set("referee")].join("");
console.log(s); //"ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
console.log(m);
console.log(m.get([1,2,3]));
m.forEach( v => console.log(v));
// [1,2,3] => true
// [1,2,3] => false
// probably because the two arrays are arrays at different addresses

///////////////////////////

// hasDuplicate

// Write a function called hasDuplicate which accepts an array 
// and returns true or false if that array contains a duplicate

const hasDuplicate = arr => arr.length != (new Set(arr)).size;

console.log(hasDuplicate([1,3,2,1]));
// true
 console.log(hasDuplicate([1,5,-1,4]) );
// false

//////////////////////////

// vowelCount

// Write a function called vowelCount which accepts a string 
// and returns a map where the keys are VOWELS and the values are the count of the vowels in the string.
const re = /[aeiou]/gi;
function vowelCount( str ) {
    let vowels = str.match(re);
    let m = new Map();
    for (let l of vowels) {
        if ( !m.has( l ) ) {
            m.set( l, 1 );
        }
        else {
            m.set( l, m.get(l) + 1 );
        }

    }
    return m;
}

console.log(vowelCount('awesome'));
 // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log( vowelCount('Colt') );
 // Map { 'o' => 1 }