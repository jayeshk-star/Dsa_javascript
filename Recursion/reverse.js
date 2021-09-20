function runProgram(input) {
    
    console.log(reverse(input))

  }

  function reverse(input){
    if(input.length==0){
        return input
    }else{
        let n=input.length;
        return input[n-1]+reverse(input.slice(0,n-1))
    }
  }
 
  
  
  if (process.env.USERNAME === "HP") {
    runProgram(`Masai school`);
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
  