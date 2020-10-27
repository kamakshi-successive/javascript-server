function rev(str)
{
    var splitstr=str.split("");
    var revstr=splitstr.reverse();
    var joinarray=revstr.join("");
    console.log(joinarray);
}

rev("hello")