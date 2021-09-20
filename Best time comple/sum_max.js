function runProgram(input) {
  //  console.log(input)
  input = input.trim().split("\n");
  var [number, target] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  // console.log(number,target,arr)

  let sum = 0;
  for (var i = 0; i < target; i++) {
    sum = sum + arr[i];
  }

  let current_sum = sum;
  let res = current_sum;

  for (i = target; i < number; i++) {
    current_sum = current_sum + arr[i] - arr[i - target];
    res = Math.max(current_sum, res);
  }
  console.log(res);
}
if (process.env.USERNAME === "HP") {
  runProgram(`5 3
    1 2 3 4 5`);
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
