function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n");
    // console.log(input);

   var test=+input[0]
   var line=1
   var count=0;
   for(var i=0;i<test;i++)
   {
       var length=+input[line]
       line++;
       var str=input[line].trim().split('').map(Number)
       line++;
    
       for( var j=0;j<str.length;j++){
          if(str[j]!==NaN)
          {
              count++
          }
          console.log(count)
          
       }
       
     
   }
    
    

}
    
if (process.env.USERNAME === "HP") {
    runProgram(`2
    5
    a123b
    5
    1abc7`);
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


