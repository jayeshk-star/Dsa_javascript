function runProgram(input) {
  var input = input.trim().split("\n");
  // console.log(input)

  var test = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  // console.log(test,arr)

  var stack = [];
  var ans = [];
  ans[0] = -1;
  stack.push(arr[0]);

  for (let i = 1; i < test; i++) {
    while (stack[stack.length - 1] >= arr[i] && stack !== []) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans[i] = -1;
    } else {
      ans[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  console.log(ans.join(" "));
}
if (process.env.USERNAME === "HP") {
  runProgram(`8
      39 27 11 4 24 32 32 1`);
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
