function runProgram(input) {
    //  console.log(input)
   var input=input.split("\n")
   var a=input[0];
   var b=input[1];
//    console.log(input)
  var diff=""
  a.split("").forEach(function(val,i) {
      if(val!=b.charAt(i))
      {
          diff+=val
      }
  });
  console.log(diff)
}
if (process.env.USERNAME === "HP") {
    runProgram(`ABCX\nABCD`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
