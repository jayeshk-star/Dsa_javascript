function runProgram(input) {
  var n=+input
  console.log(feb(n))       

}
function feb(n){
    if(n==0 || n==1){
        return n
    }else{
        return feb(n-1)+feb(n-2)
    }
}
  
  
  
  
  if (process.env.USERNAME === "HP") {
    runProgram(`4`);
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
  