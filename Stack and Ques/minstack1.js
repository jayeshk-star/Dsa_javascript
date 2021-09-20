function runProgram(input) {
    var input = input.trim().split("\n");
    // console.log(input)
    var test = +input[0];
  
    
    for (let i = 1; i <= test; i++) {
      var str = input[i];
      // console.log(str.length);
  
      if (
        ((str[0] == "(" && str[str.length - 1] == ")") || 
  
        (str[0] == "{" && str[str.length - 1] == "}") ||(str[0] == "[" && str[str.length - 1] == "]")) && str.length % 2 == 0)
      {
        console.log("balanced");
      } else {
        console.log("not balanced");
      }
    }
  }
  if (process.env.USERNAME === "HP") {
    runProgram(`3
  {([])}
  ())
  ([]`);
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
  