function runProgram(input) {
  //  console.log(input)
  var input = input.trim().split("\n");
  // console.log(input)
  var test = +input[0];

  for (var i = 1; i <= test; i++) {
    var number = +input[i];
    if (Prime(number, 2)) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}
function Prime(n, tillGiven) {
  if (n <= 2) {
    return n == 2 ? true : false;
  } else if (n % tillGiven == 0) {
    return false;
  } else if (tillGiven ** 2 > n) {
    return true;
  } else {
    return Prime(n, tillGiven + 1);
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`4
      1
      2
      3
      4`);
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
