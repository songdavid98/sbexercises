function createInstructorOld(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
}

/* Write an ES2015 Version */

const createInstructor = ( firstName, lastName ) => 
({ 
    firstName,
    lastName
});

console.log( createInstructor( "david", "song" ) );
/////////////////////////////////////////////////////////////

var favoriteNumber = 42;
var instructor = {
  firstName: "Colt"
};
instructor[favoriteNumber] = "That is my favorite!";

/* Write an ES2015 Version */

instructor = {
    firstName: "Colt",
    [favoriteNumber] : "That is my favorite!"
};
console.log( instructor );
/////////////////////////////////////////////////////////////

var instructorOld = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }
/* Write an ES2015 Version */

var instructorNew = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
};
console.log( instructorNew );

/////////////////////////////////////////////////////////////

const createAnimal = ( species, verb, noise ) =>
({
    species,
    [verb]() {
        console.log(noise);
    }
}); 

var dog = createAnimal( "dog", "bark", "Woooof!" );
console.log( dog );
dog.bark();