console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], x => x + x));
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({foo: 123}));
console.log(Array.isArray('foobar'));
console.log(Array.isArray(undefined));
console.log(Array.of(7));
console.log(Array.of(1, 2, 3));
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(console.log(array3));
const arr = ['a', 'b', 'c', 'd', 'e'];
// copy to index 0 the element at index 3
console.log(arr.copyWithin(0, 3, 4));
// copy to index 1 all elements from index 3 to the end
console.log(arr.copyWithin(1, 3))
const ar = ['a', 'b', 'c'];
const u = array1.entries();
console.log(u.next().value);
// expected output: Array [0, "a"]
console.log(u.next().value);
// expected output: Array [1, "b"]
const isBelowThreshold = (currentValue) => currentValue < 40;
const a1 = [1, 30, 39, 29, 10, 13];
console.log(a1.every(isBelowThreshold));
const y1 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// fill with 5 from position 1
console.log(array1.fill(5, 1));
console.log(array1.fill(6));
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
const r1 = [5, 12, 8, 130, 44];
const f = r1.find(element => element > 10);
console.log(f);
const arry1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(arry1.findIndex(isLargeNumber));
const b1=[0,1,2,[3,6]];
console.log(b1.flat());
const b2=[0,1,2,[[3,6]]];
console.log(b2.flat())