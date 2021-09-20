function runProgram(input) {
    var input=input.trim().split("\n")
    var [truck,weight]=input[0].trim().split(" ").map(Number);
    console.log(step(truck))
  }
  
   function step(n){
       if(n==1 || n==0){
           return 1
       }else{
           if(n==2){
               return 2
           }else{
             return  step(n-3)+step(n-2)+step(n-1)
           }
       }
   }
  
  if (process.env.USERNAME === "HP") {
    runProgram(`3 3
    1 2 3`);
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
  