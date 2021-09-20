function runProgram(input) {
 
    // console.log(input)

    var input=input.trim().split("\n");
    var n=+input[0];
    var arr=input[1].trim().split(" ").map(Number)
    // console.log(n,arr)
    const stack=[arr[n-1]];
    let ans=`${arr[n-1]}`;
    // console.log(ans)

    for(let i=n-2;i>=0;i--){
        while(arr[i]>=stack[stack.length-1] && stack.length!=0)
        {
            stack.pop()
        }
        if(stack.length===0){
            ans=`${arr[i]} ${ans}`
            stack.push(arr[i])
        }else{
            stack.push(arr[i])
        }
    }
  console.log(ans)
  
    }
  
  if (process.env.USERNAME === "HP") {
    runProgram(`6
    16 17 4 3 5 2`);
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
  