function runProgram(input) {
  input = input.trim().split("\n");
  // console.log(input);

  // console.log(test);
  var test = +input[0];
  var line = 1;
  for (var i = 0; i < test; i++) {
    var [row, col] = input[line].trim().split(" ").map(Number);
    line++;
    var mat = [];
    for (var j = 0; j < row; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    var ans = [];
    var right = col - 1;
    var left = 0;
    var bottom = row - 1;
    var top = 0;

    while (left <= right && top <= bottom) {
      for (let i = top; i <= bottom; i++) {
        ans.push(mat[i][left]);
      }
      left++;
      for (let i = left; i <= right; i++) {
        ans.push(mat[bottom][i]);
      }

      bottom--;
    }
    console.log(ans.join(" "));
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`2
    3 3
    1 2 3
    4 5 6
    7 8 9
    4 3
    4 5 6
    7 8 9
    10 11 12
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
