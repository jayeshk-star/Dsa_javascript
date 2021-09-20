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

    console.log(pairsum(arr,n-1))
  }
}

function pairsum(arr,n){
    if(n===1){
        return sum=Math.abs (arr[1]-arr[0]);
    }else{
        var sum=Math.abs(arr[n]-arr[n-1])
        
        return   sum+pairsum(arr,n-1)
    }
}

if (process.env.USERNAME === "HP") {
  runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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
