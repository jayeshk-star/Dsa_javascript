function runProgram(input) {
  var input = input.trim().split("\n");
  var n = +input[0];
  var line = 1;

  for (let i = 0; i < n; i++) {
    var [subtest, target, length] = input[line].trim().split(" ").map(Number);
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    console.log(subtest, target, length, arr);

    for (let j = 0; j < subtest - 1; j++) {
      for (let k = j; k < subtest; k++) {
        var subarr = arr.slice(j, k + 1);
        if (subarr.length == length) {
          console.log(subarr);
        }
      }
    }
  }
}
if (process.env.USERNAME === "HP") {
  runProgram(`1
    5 3 2
    1 3 2 5 1`);
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
