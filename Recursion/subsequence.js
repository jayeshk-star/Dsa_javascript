function runProgram(input) {
  var input = input;
  var output=""
  console.log(printSubsequence(input,output))
}

function printSubsequence(input, output) {
  if (input.length == 0) {
    console.log(output);
    return;
  }

//   printSubsequence(input.substring(1), output + input[0]);

  printSubsequence(input.substring(1), output);
}

if (process.env.USERNAME === "HP") {
  runProgram(`4
    abcd`);
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
