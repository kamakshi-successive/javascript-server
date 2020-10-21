//The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

//The Array.isArray() method determines whether the passed value is an Array.
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({foo: 123})); // false
console.log(Array.isArray('foobar')); // false
console.log(Array.isArray(undefined)); // false

//The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
console.log(Array.of(7));
console.log(Array.of(1, 2, 3));

//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(console.log(array3));
// expected output: Array ["a", "b", "c", "d", "e", "f"]

//The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
const arr = ['a', 'b', 'c', 'd', 'e'];
// copy to index 0 the element at index 3
console.log(arr.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]
// copy to index 1 all elements from index 3 to the end
console.log(arr.copyWithin(1, 3))
// expected output: Array ["d", "d", "e", "d", "e"]

//The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const ar = ['a', 'b', 'c'];
const u = array1.entries();
console.log(u.next().value);
// expected output: Array [0, "a"]
console.log(u.next().value);
// expected output: Array [1, "b"]

//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const isBelowThreshold = (currentValue) => currentValue < 40;
const a1 = [1, 30, 39, 29, 10, 13];
console.log(a1.every(isBelowThreshold));
// expected output: true
// fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
const y1 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(y1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]
// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]
console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); //// expected output: Array ["exuberant", "destruction", "present"]

//The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
const r1 = [5, 12, 8, 130, 44];
const f = r1.find(element => element > 10);
console.log(f);  //// expected output: 12

// findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
const arry1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(arry1.findIndex(isLargeNumber));
// expected output: 3

//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const b1=[0,1,2,[3,6]];
console.log(b1.flat());
// expected output: [0, 1, 2, 3, 4]
const b2=[0,1,2,[[3,6]]];
console.log(b2.flat())
// expected output: [0, 1, 2, [3, 4]]

//flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
let arr1 = [1, 2, 3, 4];
arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]
arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]
// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
//forEach() method executes a provided function once for each array element.
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"

// includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// expected output: true

//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// expected output: 1

//join() method creates and returns a new string by concatenating all of the elements in an array
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(''));
// expected output: "FireAirWater"
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"


//keys() method returns a new Array Iterator object that contains the keys for each index in the array.
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}
// expected output: 0
// expected output: 1
// expected output: 2

//The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

//pop() method removes the last element from an array and returns that element. This method changes the length of the array.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// expected output: "tomato"
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]


//The push() method adds one or more elements to the end of an array and returns the new length of the array.
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

//reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

//reverse() method reverses an array in place. 
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

//shift() method removes the first element from an array and returns that removed element.
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
// expected output: Array [2, 3]
console.log(firstElement);
// expected output: 1

//slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// expected output: true


//The sort() method sorts the elements of an array in place and returns the sorted array.
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]



//The toSource() method returns a string representing the source code of the array.
var alpha = new Array('a', 'b', 'c');
alpha.toSource();
//returns ['a', 'b', 'c]

//The toString() method returns a string representing the specified array and its elements.
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());
// expected output: "1,2,a,1a"

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

//The values() method returns a new Array Iterator object that contains the values for each index in the array.
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"
