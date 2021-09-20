function runProgram(input) {
  var input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(middle(arr, n));
}
function middle(arr, n) {
  let sum = 0;
  let beforesum = 0;
  for (let i = 0; i < n; ++i) {
    sum += arr[i];
  }
  for (let i = 0; i < n; ++i) {
    sum -= arr[i];
    if (beforesum == sum) {
      return i + 1;
    }
    beforesum += arr[i];
  }

  return -1;
}
if (process.env.USERNAME === "HP") {
  runProgram(`5
  3 3 5 5 1`);
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
