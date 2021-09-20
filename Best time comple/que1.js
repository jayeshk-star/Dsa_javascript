function runProgram(input) {
    //  console.log(input)
    input = input.trim().split("\n");
    var test=+input[0];
    
    var line=1;
    for(let i=0;i<test;i++)
    {
      var [subtest,target]=input[line].trim().split(" ").map(Number)
      line++;
      var arr=input[line].trim().split(" ").map(Number)
      line++;
      // console.log(subtest,arr)

      var sort=arr.sort((a,b)=>a-b)
      // console.log(sort)

      var l=0;
      var r=sort.length-1;
      var flag=false

      while(l<r){
        if(arr[l]+arr[r]==target)
        {
          console.log(1)
          flag=true;
          break;
        }else if(arr[l]+arr[r]>target)
        {
          r--
        }else{
          l++
        }
        if(flag)
        {
          break;
        }
      }
      if(!flag)
      {
        console.log(-1)
      }
    }
    
   
    }
  
  if (process.env.USERNAME === "HP") {
    runProgram(`1
    5 2
    3 4 0 2 7
    `);
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
  