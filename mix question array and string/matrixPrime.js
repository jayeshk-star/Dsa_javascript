function runProgram(input) {
    //  console.log(input)
    input = input.trim().split("\n");
    // console.log(input);
    var [row,col] = input[0].trim().split(" ").map(Number)
    //   console.log(row)
  
    var line = 1;
    var mat = [];
    for (var i = 0; i < row; i++) {
      var arr = input[line].trim().split(" ").map(Number);
      line++;
      mat.push(arr);
    }
    for (let i = 0; i < mat.length; i++) {
      var reverse = mat[i].reverse();
      console.log(reverse.join(" "));
    }
  }
  
  if (process.env.USERNAME === "HP") {
    runProgram(`3 3
    1 2 3 
    4 5 6
    7 8 9`);
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
  