function runProgram(input) {
  input = input.trim().split("\n");
  // console.log(input);

  // console.log(test);
  var test = +input[0];
  var line = 1;
  for (var i = 0; i < test; i++) {
    var row = +input[line];
    line++;
    var mat = [];
    for (var j = 0; j < row; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }

    var ans = [];
    var right = row - 1;
    var left = 0;
    var bottom = row - 1;
    var top = 0;
    for (let k = left; k <= right; k++) {
      ans.push(mat[top][k]);
    }
    top++;
    for (let k = top; k <= bottom; k++) {
      ans.push(mat[k][right - k]);
    }
    left++;
    for (let k = left; k <= right; k++) {
      ans.push(mat[bottom][k]);
    }

    console.log(ans.join(" "));
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`2
  3
  1 2 3
  4 5 6
  7 8 9
  3
  5 6 7
  8 9 8
  7 5 6`);
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
