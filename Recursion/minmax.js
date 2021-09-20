function runProgram(input) {
  var input = input.trim().split("\n");

  var n = +input[0];

  var arr = input[1].trim().split(" ").map(Number);
  console.log(Min(arr,n))
  console.log(Max(arr,n))
}

function Min(Arr, n) {
  if (n == 1) {
      return Arr[0];
  }else{
    return Math.min(Arr[n - 1], Min(Arr, n - 1));
  }
  
}

function Max(Arr, n) {
    if (n == 1) {
        return Arr[0];
    }else{
      return Math.max(Arr[n - 1], Max(Arr, n - 1));
    }
    
  }
  

if (process.env.USERNAME === "HP") {
  runProgram(`4
      -2 0 8 4`);
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
