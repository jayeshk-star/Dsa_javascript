function runProgram(input) {
  var input = input.trim().split("\n");
  var [n, target] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);

  var object = {};
  for (let i = 0; i < n; i++) {
    object[arr[i]] == undefined ? (object[arr[i]] = 1) : object[arr[i]]++;
  }
  for (let key in object) {
    if (key == target) {
      console.log(object[key]);
    }
  }
}
if (process.env.USERNAME === "HP") {
  runProgram(`6 3
    2 3 3 3 6 9`);
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
