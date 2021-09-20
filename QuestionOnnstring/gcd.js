function runProgram(input) {
    //  console.log(input)
    input=input.trim().split(" ")
    // console.log(input)
    var num1=+input[0];
    var num2=+input[1];
    // console.log(num1,num2)

    var gcd;
   for(var i=0;i<num1 && i<num2;i++)
   {
       if(num1%i==0 && num2%i==0)
       {
          gcd=i;
       }
   }
   console.log(gcd)
   
 }
if (process.env.USERNAME === "HP") {
    runProgram(`51 68`);
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
