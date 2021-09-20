function runProgram(input) {
  var input = input.trim().split("\n");
  var n = +input[0];
  var str = input[1].trim();
  //   console.log(str)
  var rev = str.trim().split("").reverse().join("");
  //  console.log(rev)
  if (str == rev) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`6
 naman`);
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
