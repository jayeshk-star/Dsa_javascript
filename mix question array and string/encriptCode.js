function runProgram(input) {
  //  console.log(input)
  input = input.trim().split("\n");
  // console.log(input)

  var line = 1;
  for (var i = 0; i < +input[0]; i++) {
    var subtest = +input[line];
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;

    var start = 0;
    var end = subtest - 1;
    var str = "";
    while (start < end) {
      str = str + " " + arr[start++];
      str = str + " " + arr[end--];
    }
    if (subtest % 2 !== 0) {
      str = str + " " + arr[start];
    }
    console.log(str.trim());
  }
}
if (process.env.USERNAME === "HP") {
  runProgram(`2
    8
    1 3 5 7 8 6 4 2
    6
    1 3 5 6 4 2
  `);
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
