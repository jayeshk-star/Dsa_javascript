function runProgram(input) {
    //  console.log(input)
    input = input.trim().split("\n");
    console.log(input)
    var test=+input[0]
     
    var line=1;
    let count=0
       for(var i=0;i<test;i++)
       {
           var str=input[line].trim().split("")
           line++;
          console.log(str.split(''))
       }    
  }
  if (process.env.USERNAME === "HP") {
    runProgram(`4
    aaaaaa
    aaabbb
    asd
    aabbcc`);
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
  