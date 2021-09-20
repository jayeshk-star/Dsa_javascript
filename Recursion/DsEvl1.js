function runProgram(input) {
    input=input.trim().split("\n")
    var n=+input[0];

    for(let i=1;i<=n;i++){
      var str=input[i].trim()
      // console.log(str)

     var value=0;
     for(let j=0;j<str.length;j++){
        value=value*26;
        value=value+str[j].charCodeAt(0)-"A".charCodeAt(0)+1;
     }
     console.log(value)
    }
    
  }
  
  
  if (process.env.USERNAME === "HP") {
    runProgram(`3
    A
    AB
    ZY`);
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
  