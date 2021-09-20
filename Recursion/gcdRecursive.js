function runProgram(input) {
  var input = input.trim().split("\n");
  var n = +input[0];
  for (let i = 1; i <= n; i++) {
    [a, b] = input[i].trim().split(" ").map(Number);
    console.log(gcd(a, b));
  }
}

function gcd(a, b) {
  if (b == 0) {
    return a;
  }

  return gcd(b, a % b);
}
if (process.env.USERNAME === "HP") {
  runProgram(`10
  1 3
  7 9
  2 3
  6 4
  4 3
  9 9
  2 7
  4 4
  10 10
  2 7`);
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
