function runProgram(input) {
    //  console.log(input)
    input = input.trim().split("\n");
    var [number,target]=input[0].trim().split(" ").map(Number)
    var arr=input[1].trim().split(" ").map(Number)
    // console.log(number,arr)


    let cureent_sum=arr[0];
    let start=0;
    let count=0
    let sum=0

    for( let i=1;i<=number;i++)
    {
        while(cureent_sum>sum && start<i-1)
        {
        
            cureent_sum=cureent_sum+arr[start]
            sum=Math.max(cureent_sum,sum)
            start++;
        }
        if(sum%target!==0){
            count++;
            
            console.log(sum)
        }
        if(i<number)
        {
            cureent_sum+=arr[i]
        }
    }

      
      }
  if (process.env.USERNAME === "HP") {
    runProgram(`4 3
    2 3 4 6`);
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
  