function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
    totalnum=+input[0]
    num=input[1].trim().split(" ").map(Number)

    // console.log(totalnum)
    // console.log(num)
    var count=0;
     for(var i=0;i<totalnum;i++){
         if(num[i]<0){
             count++
         }
     }console.log(count)
}
    
if (process.env.USERNAME === "HP") {
    runProgram(`5
    -3 0 -5 9 8`);
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


