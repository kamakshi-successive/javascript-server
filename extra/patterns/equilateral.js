export default function equilateral(n)
{
  let str;
  for(let i=1; i<=n; i++)
  {
    str = '';
    for(let k=1; k<=n-i; k++)
    {
      str += " ";
    }
    for(let j=1; j<=i; j++)
    {
      str += "* ";
    }
    console.log(str);
    str = "";
  }

}

//let y=process.argv[2];

//equilateral(y);
