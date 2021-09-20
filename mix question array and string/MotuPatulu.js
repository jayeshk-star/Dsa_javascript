function runProgram(input) {
  var n = +input;
  var higest = Math.floor(n / 5);
  var remainder = n % 5;
  var step;
  if (remainder >= 1 && remainder <= 5) {
    step = higest + 1;
  } else {
    step = higest;
  }
  console.log(step);
}

if (process.env.USERNAME === "HP") {
  runProgram(`42`);
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
