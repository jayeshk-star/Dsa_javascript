function runProgram(input) {
    //  console.log(input)
    input = input.trim().split("\n");
    var test=+input[0];
    var arr=input[1].trim().split(" ").map(Number)
    console.log(test,arr)

    arr.sort((a,b)=>a-b)
    // console.log(arr)
    var arr1=[];
    var arr2=[]
    for(i=0;i<(arr.length/2);i++)
    {
       arr1.push(arr[i])
    }
    console.log(arr1)
    for(i=(arr.length/2);i<(arr.length);i++)
    {
       arr2.push(arr[i])
    }
    console.log(arr2)
     var sum=0
    for(var i=0;i<arr.length/2;i++)
    {
        sum=sum+arr1[i]+arr2[i]
    }
    console.log(sum)
    
}
    
  if (process.env.USERNAME === "HP") {
    runProgram(`2
    1 3 6 8 1 2`);
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
  