function runProgram(input) {
    var input = input.trim().split("\n");
    // console.log(input)
    var n=+input[0];
    var arr=input[1].trim().split(" ").map(Number)
    // console.log(n,arr)
    console.log(product(arr,n))
    
    }

    function product(arr,n){
        if(n===1){
          return arr[0]
        }else{
          return arr[n-1]*product(arr,n-1)
        }
    }
  
  
  
  
  if (process.env.USERNAME === "HP") {
    runProgram(`5
    3 5 2 9 4`);
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
  