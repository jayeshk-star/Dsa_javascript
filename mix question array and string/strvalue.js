function runProgram(input) {
  var str = input.trim();
  var ascii = str.charCodeAt(0);
  // console.log(ascii)
  var sum = 0;
  for (let i = 0; i < str.length; i++) {
    var ascii = str.charCodeAt(i) - 96;
    // console.log(ascii)
    sum = sum + ascii;
  }

  console.log(sum);
}

if (process.env.USERNAME === "HP") {
  runProgram(`aba`);
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
