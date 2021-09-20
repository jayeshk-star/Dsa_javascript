function runProgram(input) {
    let inp = input.trim()
    let x = ""

    if(inp.length%2==0){
       for(let i= (input.length/2)-1;i>=0;i--) {
           x = x+inp[i]
       }
     
       for(let j=input.length-1;j>(input.length/2)-1;j--){
           x=x+inp[j];
       }
    }
    else{
       for(let i= Math.floor(input.length/2)-1;i>=0;i--) {
           x = x+inp[i]
       }
        x= x+(inp[Math.floor(inp.length/2)])
       for(let j=input.length-1;j>=Math.ceil(input.length/2);j--){
           x=x+inp[j];
       }
    }
  
   console.log(x) 
}

if (process.env.USERNAME === "HP") {
  runProgram(`abcxyz`);
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
