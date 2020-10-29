export default function printDiamond(n: number) {
  let str: string;
  for (let i: number = 1; i <= n; i++) {
    str = '';
    for (let k: number = 1; k <= n - i; k++) {
      str += ' ';
    }
    for (let j: number = 1; j <= i; j++) {
    {
      str += '* ';
    }
    console.log(str);
    str = '';
  }
  for (let m = n; m > 0; m--) {
    str = '';
    for (let k = n - m; k > 0; k--) {
      str += ' ';
    }
    for (let j = 1; j <= m; j++) {
      str += '* ';
    }
    console.log(str);
    str = '';
  }
}
}
