function runProgram(input) {
    var input = input.trim().split("\n");
    var n=+input[0]
    var arr=input[1].trim().split(" ").map(Number)
    
    var obj={}
    for(let i=0;i<n;i++){
        obj[arr[i]]==undefined ? obj[arr[i]]=1 : obj[arr[i]]++
    }
    // console.log(obj)
    var arr=[]
    for(let key in obj){
        arr.push(key)
    }
    console.log(arr.join(" "))

  
  }
  
  if (process.env.USERNAME === "HP") {
    runProgram(`5
    2 2 2 7 9`);
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
  