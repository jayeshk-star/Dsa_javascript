function runProgram(input) {
  input = input.trim().split("\n");

  var test = +input[0];
  var line = 1;
  for (var i = 0; i < test; i++) {
    var [row, col] = input[line].trim().split(" ").map(Number);
    line++;
    var mat = [];
    for (var j = 0; j < row; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    for (let k = 0; k < row; k++) {
      for (let j = 0; j < col; j++) {
          
      }
    }
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`2
  3 3
  1 2 1 
  1 3 1
  1 2 1
  3 3
  1 2 3
  1 1 3
  1 2 3
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
