function runProgram(input) {
    var input=input.trim().split("\n");
    // console.log(input)
  
    
    var test=+input[0];
    var line=1
    // console.log(test,arr)
    for(let i=0;i<test;i++){
        var subtest=+input[line]
        line++;
        var arr=input[line].trim().split(" ").map(Number)
        line++
        // console.log(arr,subtest)

        var stack=[];
        let ans=[];
        // ans[0]=-1;
        stack.push(arr[arr.length-1]);
        // console.log(stack)

        for(let i=subtest-1;i>=0;i--)
        {
            while(stack[stack.length-1]>=arr[i]  && stack.length !==0)
            {
                stack.pop();
            }if(stack.length===0)
            {
                ans[i]=-1
            }else{
                ans[i]=stack[stack.length-1]
            }
            stack.push(arr[i])
        }
          console.log(ans.join(" "))
    }
    
      }
  if (process.env.USERNAME === "HP") {
      runProgram(`1
      4
      1 3 2 4`);
  } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function(input) {
          read += input;
      });
      process.stdin.on("end", function() {
          read = read.replace(/\n$/, "");
          read = read.replace(/\n$/, "");
          runProgram(read);
      });
      process.on("SIGINT", function() {
          read = read.replace(/\n$/, "");
          runProgram(read);
          process.exit(0);
      });
  }
  