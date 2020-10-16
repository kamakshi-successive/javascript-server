function rev(str)
{
    var splitstr=str.split("");
    var revstr=splitstr.reverse();
    var joinarray=revstr.join("");
    console.log(joinarray);
}

rev("hello")


//Chaining the three methods together:
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// reverseString("hello");

