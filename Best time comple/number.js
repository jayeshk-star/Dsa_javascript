
function runProgram(input) {
    
    console.log(input)

     var subarray;
    if(input%2==0)
    {
      subarray=input*((input-1)+0.5);
    }
    else{
        subarray=input*((input/2)+0.5);
    }
    console.log(subarray)
  }
  if (process.env.USERNAME === "HP") {
    runProgram(`100`);
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
  