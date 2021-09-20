function runProgram(input) {
     var n=+input
     console.log( Number(log(n).toFixed(4)))
    }
    function log(n){
        if(n===1){
            return 0;
        }else{
            return log(n-1)+Math.log(n)
        }
    }
  
  
  
  if (process.env.USERNAME === "HP") {
    runProgram(`3`);
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
  