function runProgram(input) {
  var input = input.trim().split("\n");
  var n = +input[0];
  var str = input[1].trim().split("");
  // console.log(str, n )

  var stack = [];

  stack.push(str[0]);

  for (let i = 1; i < n; i++) {
    if (stack[stack.length - 1] == str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  if (stack.length == 0) {
    console.log("-1");
  } else {
    console.log(stack.join(""));
  }
}
if (process.env.USERNAME === "HP") {
  runProgram(`2
  aa`);
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
