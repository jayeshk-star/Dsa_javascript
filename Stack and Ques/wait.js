function runProgram(input) {
    var input=input.trim().split("\n");
    var len=+input[0];
    stack=[];
    for(let i=1;i<=len;i++){
        arr=input[i].trim().split(" ")
        if(arr[0]=="E"){
            stack.push(arr[1])
            console.log(stack.length)
        }
        else if(arr[0]=="D")
        {
            if(stack.length==0){
                console.log(-1,0)
            }
            else {
                var que=stack.shift()
                console.log(que,stack.length)
            }
        }
    }

    }
  
  if (process.env.USERNAME === "HP") {
    runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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
  