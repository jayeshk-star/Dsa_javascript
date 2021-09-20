function runProgram(input) {
  input = input.trim().split("\n");
  //   console.log(input);
  var n = +input[0];
  var line = 1;
  for (let i = 0; i < n; i++) {
    var subtest = +input[line];
    line++;
    var str = input[line].trim();
    line++;
    // console.log(subtest, str);

    for (let j = 0; j < subtest; j++) {
      for (let k = j; k < subtest; k++) {
        var substring = str.slice(j, k + 1);
        console.log(substring);
      }
    }
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`1
  4 
  aman`);
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
