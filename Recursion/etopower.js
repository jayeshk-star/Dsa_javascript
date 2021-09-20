function runProgram(input) {
  var [x, n] = input.trim().split(" ").map(Number);

  console.log(expoential(x, n).toFixed(4));
}

product = 1;
factorail = 1;
function expoential(x, n) {
  var term;

  if (n == 0) return 1;

  term = expoential(x, n - 1);

  product = product * x;

  factorail = factorail * n;

  return term + product / factorail;
}

if (process.env.USERNAME === "HP") {
  runProgram(`4 2`);
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
