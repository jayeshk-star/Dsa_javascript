function runProgram(input) {
    //  console.log(input)
   var input=input.split("")
//    console.log(input)
   var half=Math.ceil((input.length/2)-1)
   for(var i=0;i<half;i++){
       var x=input[i].reverse()
       console.log(x)
   }
}
if (process.env.USERNAME === "HP") {
    runProgram(``);
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
