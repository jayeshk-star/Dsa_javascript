function runProgram(input) {
  input = input.trim().split("\n");
  //   console.log(input);
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);

  var subtest = +input[2];
  var line = 3;
  for (let i = 0; i < subtest; i++) {
    var [left, rigth] = input[line].trim().split(" ").map(Number);
    line++;
    var sum = 0;
    for (let j = left - 1; j <= rigth - 1; j++) {
      sum += arr[j];
    }
    console.log(sum);
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`4
    3 2 1 5
    4
    1 3
    2 4
    1 4
    3 3`);
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
