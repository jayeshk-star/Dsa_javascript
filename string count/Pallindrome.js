function runProgram(input) {
  var str1 = input;
  var str2 = "";
  for (let i = str1.length - 1; i >= 0; i--) {
    str2 = str2 + str1[i];
  }
  //    console.log(str2)
  if (str1 == str2) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
if (process.env.USERNAME === "HP") {
  runProgram(`1221`);
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
