function runProgram(input) {
  var input = input.trim().split("\n").map(Number);
  console.log(input);
  var n = +input[0];

  for (let i = 1; i <= n; i++) {
    if ( input[i]% 10==1  || input[i] % 20==0 ||  input[i] % 10==0) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`5
    1
    2
    10
    25
    200`);
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
