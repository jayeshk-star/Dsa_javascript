function runProgram(input) {
  var input = input.trim().split("\n");
  // console.log(input)
  var test = +input[0];
  var line = 1;
  // console.log(test,arr)
  for (let i = 0; i < test; i++) {
    var [subtest, target] = input[line].trim().split(" ").map(Number);
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    // console.log(arr,subtest)
    var cureent_sum = arr[0];
    var count = 0;
    var beg = 0;
    for (let i = 1; i <= subtest; i++) {
      while (cureent_sum > target && beg == i - 1) {
        cureent_sum -= arr[beg];
      }
      if (cureent_sum < target) {
        count++;
      } else if (i < subtest) {
        cureent_sum += arr[i];
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === "HP") {
  runProgram(`1
      5 5
      1 5 1 3 2`);
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
