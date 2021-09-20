function runProgram(input) {
  app(input)
}

function app(input){
    var input = input.trim().split("\n");

  let test = +input[0];

  var que = [];

  for (let i = 1; i <= test; i++) {
    var arr = input[i].trim().split(" ");
    // console.log(arr);

    if (arr[0] == "0") {
      que.push(arr[1]);
    } else if (arr[0] == "2") {
      que.shift();
    } else if (arr[0] == "1") {
     return (que[0]);
    }
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`16
  0 72
  2
  0 349
  2
  0 980
  0 550
  2
  0 476
  2
  0 773
  0 315
  0 455
  2
  2
  1
  1`);
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
