function runProgram(input) {
    var input=input.trim().split("\n");
    // console.log(input)

    var test=+input[0];
    var arr=input[1].trim().split(" ").map(Number)
    // console.log(test,arr)
     
    arr.sort((a,b)=>a-b);
    let sum=0;
    for(let i=test;i<2*test;i++)
    {
        sum+=arr[i]
    }
    console.log(sum)


    var test=+input[0]
      }
  if (process.env.USERNAME === "HP") {
      runProgram(`2
      1 3 1 2`);
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
  