function runProgram(input) {
  //  console.log(input)
  input = input.trim().split("\n");

  var [row, col] = input[0].trim().split(" ").map(Number);

  var line = 1;
  var mat = [];
  for (let i = 0; i < row; i++) {
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    mat.push(arr);
  }

  for (var i = 0; i < col; i++) {
    var arr = [];
    for (var j = 0; j < row; j++) {
      arr.push(mat[j][i]);
    }

    console.log(arr.join(" "));
  }
}
if (process.env.USERNAME === "HP") {
  runProgram(`5 4
  0 0 0 0
  1 1 1 1
  2 2 2 2
  3 3 3 3
  4 4 4 4`);
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
