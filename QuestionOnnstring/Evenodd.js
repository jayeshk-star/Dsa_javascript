function runProgram(input) {
    //  console.log(input)
    input = input.trim().split("\n");
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number);
    // console.log(number,target,arr)
    var even=0
    var odd=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0 ){
            even=even+arr[i]
        }else{
            odd=odd+arr[i]
        }
     
      
    }
    // console.log(even,odd)
    if(even>odd ){
        console.log("Even")
    }else{
        console.log("Odd")
    }
  
  }
  if (process.env.USERNAME === "HP") {
    runProgram(`4
    1 2 3 4`);
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
  