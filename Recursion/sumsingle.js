function runProgram(input) {
  var [number,repeat] =input.trim().split(" ").map(Number) 
//   console.log(number,repeat)

if(repeatedouble(number,repeat)<0){
    console.log(-(repeatedouble(number,repeat)))
}else
  console.log(repeatedouble(number,repeat))
}

function digSum(n) {
  if (n == 0) return 0;

  return n % 9 == 0 ? 9 : n % 9;
}

function repeatedouble(n, x) {
  sum = x * digSum(n);
  return digSum(sum);
}

if (process.env.USERNAME === "HP") {
  runProgram(`148 3`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
