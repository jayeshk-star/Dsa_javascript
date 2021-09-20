function runProgram(input) {
  var input = input.trim().split("\n");
  // console.log(input)
  var test = +input[0];

  var line = 1;
  for (let i = 0; i < test; i++) {
    var number = +input[line];
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;

    //   console.log(number,arr)

    var sum = 0;
    var newarr = [];

    for (let j = 0; j < number; j++) {
      sum = sum + arr[j];
      newarr.push(sum);
    }
    console.log(newarr.join(" "));
  }
}
if (process.env.USERNAME === "HP") {
  runProgram(`1
    5
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
