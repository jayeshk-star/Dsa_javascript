function runProgram(input) {
  //  console.log(input)
  var input = input.trim().split("\n");
  // console.log(input)
  var test = +input[0];

  var line = 1;
  for (var i = 0; i < test; i++) {
    var len = +input[line];
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    // console.log(len,arr)
    var flag = false;
    for (let j = 0; j < len; j++) {
      if (arr[j] % 2 == 0 && arr[j + 1] % 2 == 0 && arr[j + 2] % 2 == 0) {
        console.log("Yes");
        flag=true
        break;
      }
    }
    if (!flag) {
      console.log("No");
    }
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`3
    3
    1 2 3
    5
    1 2 4 6 8
    6
    1 1 9 6 9 4`);
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
