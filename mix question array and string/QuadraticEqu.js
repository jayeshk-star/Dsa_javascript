function runProgram(input) {
  var arr = input.trim().split(" ").map(Number);
  var left = arr[3];
  var right = arr[4];

  var product = 1;
  for (let i = left; i <= right; i++) {
    var QE = arr[0] * i * i + arr[1] * i + arr[2];
    product = product * QE;
  }
  console.log(product);
}

if (process.env.USERNAME === "HP") {
  runProgram(`-1 3 8 -2 2`);
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
