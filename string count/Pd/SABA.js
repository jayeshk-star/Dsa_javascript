function runProgram(input) {
  //  console.log(input)
  input = input.trim().split("\n");
  // console.log(input);
  var [row, col, target] = input[0].trim().split(" ").map(Number);
  // console.log(row,col,target);

  var line = 1;
  var mat = [];
  for (var i = 0; i < row; i++) {
    var arr = input[line].trim().split("");
    line++;
    mat.push(arr);
  }

  var count = 0;
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (mat[i][j] == "s") {
        if (j + 3 < col) {
          if (
            mat[i][j] == "s" &&
            mat[i][j + 1] == "a" &&
            mat[i][j + 2] == "b" &&
            mat[i][j + 3] == "a"
          ) {
            count++;
          }
        }
        if (i + 3 < row) {
          if (
            mat[i][j] == "s" &&
            mat[i + 1][j] == "a" &&
            mat[i + 2][j] == "b" &&
            mat[i + 3][j] == "b"
          ) {
            count++;
          }
        }
        if (i + 3 < row && j + 3 < col) {
          if (
            mat[i][j] == "s" &&
            mat[i + 1][j + 1] == "a" &&
            mat[i + 2][j + 2] == "b" &&
            mat[i + 3][j + 3] == "a"
          ) {
            count++;
          }
        }

        if (i > 2 && j + 3 < col) {
          if (
            mat[i][j] == "s" &&
            mat[i - 1][j + 1] == "a" &&
            mat[i - 2][j + 2] == "b" &&
            mat[i - 3][j + 3] == "a"
          ) {
            count++;
          }
        }
      }
    }
  }

  console.log(count);
}

if (process.env.USERNAME === "HP") {
  runProgram(`5 5
    safer
    amjad
    babol
    aaron
    songs
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
