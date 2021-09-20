function runProgram(input) {
  var input = input.trim().split("\n");
  // console.log(input)
  var test = input[0];
  var str = input[1].trim().split("");
  // console.log(str)
  var str1 = "";
  for (let i = 0; i < test; i++) {
    if (i % 2 == 0) {
      str1 = str1 + str[i];
    }
  }
  // console.log(str1)
  var res = str1.split("").reverse().join("");
  // console.log(res)
  if (str1 == res) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
if (process.env.USERNAME === "HP") {
  runProgram(`8
    abcdcfd`);
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
