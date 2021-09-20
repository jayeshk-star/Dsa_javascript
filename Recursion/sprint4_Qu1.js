function runProgram(input) {
  var n = +input;
   
}
function ways(n) {
  if (n == 0 || n<=7 ) {
    return 1;
  } else if (n == 8) {
    return 2;
  } else {
    return ways(n - 8) + ways(n - 4);
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`12`);
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
