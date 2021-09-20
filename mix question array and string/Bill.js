function runProgram(input) {
  var bill = +input;
  var removeExtra = bill - 80;
  console.log(removeExtra)
  var unit;
  if(removeExtra>=750){
       unit=removeExtra/10
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`930`);
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
