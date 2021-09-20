function runProgram(input) {
    //  console.log(input)
    input = input.trim().split("\n");
    var test=+input[0]
    // console.log(test)
     var line=1;
    for(var i=0;i<test;i++){
       var str=input[line].trim()
       line++
       


       const maxPower = (str = '') => {
        let power = 1
        var leng=str.length-1
        for(let i = 0; i <leng; ++i) {
           let count = 1
           while(i < leng && str[i + 1] === str[i] && ++i)
           power = Math.max(power, ++count)
        }
        return power
     };
     console.log(maxPower(str));
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
  