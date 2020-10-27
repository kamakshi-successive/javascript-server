// Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
const target={a:3,b:5};
const source={b:4,c:5};
const returnTarget=Object.assign(target,source);
console.log(returnTarget);
console.log(target);

//Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
const person={
    isHuman:false,
    printIntro:function(){
        console.log(`My name is ${this.name}. Am I human ${this.isHuman}`);
    }
};
const me =Object.create(person);
me.name="kam";
me.isHuman=false;
me.printIntro();

//  Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.

//Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs
const object1={
    a: 'abc',
    b: 42
};
for (const[key,value] of Object.entries(object1)){
    console.log(`${key}: ${value}`);
}