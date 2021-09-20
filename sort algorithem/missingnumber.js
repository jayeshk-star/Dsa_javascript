// n = 6;
// var arr = [1, 3, 4, 5, 2];

// var arrsum = arr.reduce((a, b) => a + b);

// var totoalsum = (n * (n + 1)) / 2;

// var missingnumber = totoalsum - arrsum;

// console.log(missingnumber);

///if number is reapting in array then missing number;

n1 = 8;
var arr2 = [1, 2, 3, 4, 5, 6, 5, 7];

var objcet = {};
for (let i = 0; i < n1; i++) {
  objcet[arr2[i]] == undefined ? (objcet[arr2[i]] = 1) : objcet[arr2[i]]++;
}
// console.log(objcet)
var totalsum = (n1 * (n1 + 1)) / 2;
var arr2sum = arr2.reduce((a, b) => a + b);
// console.log(arr2)
var diff = totalsum - arr2sum;
// console.log(diff)

for (let key in objcet) {
  if (objcet[key] > 1) {
    console.log(Number(key) + diff);
  }
}
