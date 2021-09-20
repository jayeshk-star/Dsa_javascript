function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
    var totalnum=+input[0];
    var num=input[1].trim().split(" ").map(Number)
    // console.log(totalnum)
    // console.log(num)
   var product=1;
    for( var i=0;i<totalnum;i++){
        product=product*num[i]
        
    }console.log(product)
}
    
if (process.env.USERNAME === "HP") {
    runProgram(`5
    3 5 2 9 4`);
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


