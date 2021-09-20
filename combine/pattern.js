function runProgram(input) {
  //  console.log(input)
  input = input.trim().split("\n");
  var test = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  var sortarr = arr.sort((a, b) => a - b);
  console.log(sortarr);
  for (let i = 0; i < test; i = i + 2) {
    var temp = sortarr[i];
    sortarr[i] = sortarr[i + 1];
    sortarr[i + 1] = temp;
  }
  console.log(sortarr.join(" "));
}
if (process.env.USERNAME === "HP") {
  runProgram(`10
    9 8 4 10 3 6 5 7 1 2
  `);
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
