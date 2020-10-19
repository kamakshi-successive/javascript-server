//Object Assign : Copies all enumerable own properties from one object to other

var a={a:10};
var new_obj=Object.assign({},a);
console.log(new_obj)

var o1={a: 10 };
var o2={b: 20 };
var o3={c: 30 };
var new_obj=Object.assign({},o1,o2,o3);
console.log(new_obj)

var o1={a:10,b:10,c:10};
var o2={b:20,c:20};
var o3={c:30};
var new_obj=Object.assign(o1,o2,o3);
 console.log(new_obj)


//Object Create : Method create an object using existing object

const person ={
    isHuman: false,
    printIntro: function(){
        console.log('My name is' + this.name+'Am I human?'+ this.isHuman);

    }
};
const me=Object.create(person);
me.name='ka';
me.isHuman=true;
me.printIntro();

//Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.

const o1={};
Object.defineProperties(o1,{
    p1: {
        value: 42,
        writable: true
    },
    p2:{}
});
console.log(o1.p1);

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});
object1.property1 = 77;
// throws an error in strict mode
console.log(object1.property1);
// expected output: 42

const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
