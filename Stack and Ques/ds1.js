function runProgram(input) {
    var input=input.trim().split("\n");
    // console.log(input)
    var test=+input[0];
     var line=1;
    for(let i=0;i<test;i++){
        let subtest=+input[line]
        line++
        let arr=input[line].trim().split(" ").map(Number)
        line++

        console.log(subtest,arr)

        var stack=[];
        var ans=[];
        ans[0]=-1
        
        stack.push(arr[0])

        for(let i=1;i<subtest;i++){
            while(stack[stack.length-1]<=arr[i]  && stack!=[]){
                stack.pop()
            }
            if(stack.length===0){
                ans[i]=-1
            }else {
                ans[i]=stack[stack.length-1]
            }
            stack.push(arr[i])
        }
        console.log(ans.join(" "))
    }

   
      }
  if (process.env.USERNAME === "HP") {
      runProgram(`1
      5
      5 6 1 2 1`);
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
  