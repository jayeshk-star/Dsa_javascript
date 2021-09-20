function runProgram(input) {
  var input = input.trim().split("\n");
  // console.log(input)

  var test = +input[0];
  var line = 1;
  // console.log(test,arr)
  for (let i = 0; i < test; i++) {
    var n = +input[line];
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;

    console.log(SumOfArray(arr,n));
  }
}

function SumOfArray(arr,n) {
    if(n===1){
        return arr[0];
    }
    else{
        return arr[n-1]+SumOfArray(arr,n-1)
    }
}

if (process.env.USERNAME === "HP") {
  runProgram(`3
  5
  6 3 8 2 -4
  6
  -10 -7 10 2 -2
  5
  -4 -5 6 -3 9`);
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
