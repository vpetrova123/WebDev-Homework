const getPrimes = (input) => {
  if (input == 1 || input == 0) {
    return false;
  }
  for (let i = 2; i < input; i++) {
    if (input % i == 0) {
      return false;
    }
  }
  return true;
};

let flag = false;
for (let i = 1; i <= 100; i++) {
  flag = getPrimes(i);
  if (flag == true) {
    console.log(i);
  }
}
// 2
// 3
// 5
// 7
// 11
// 13
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// ...
