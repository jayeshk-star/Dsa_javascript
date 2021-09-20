function runProgram(input) {
    var str=input
    // console.log(str.slice(1))
    var count=0
    console.log(Len(str,count))

    
    }
    function Len(str,count) {
        if (str.length) {
           return Len(str.substr(1), ++count);
        } else {
            return count;
        }
     }


    
  
  
  
  
  if (process.env.USERNAME === "HP") {
    runProgram(`masaischool`);
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
  