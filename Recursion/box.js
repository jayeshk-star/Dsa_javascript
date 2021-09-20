function runProgram(input) {
  var n = +input;
  console.log(step(n));
}

function step(n) {
  if (n == 1 || n == 2 || n==0) {
    return 1;
  } else {
      if(n==3){
          return 2
      }else if(n==4){
          return 3
      }
    return step(n - 1) + step(n - 3) + step(n - 5);
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`7`);
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
