function runProgram(input) {
    //  console.log(input)
    var input=input.trim().split("\n")
    // console.log(input)
    var test=+input[0];

    var line=1;
    for( var i=0;i<test;i++){
        var len=+input[line]
        line++;
        var arr=input[line].trim().split(" ").map(Number)
        line++;
        console.log(len,arr)
    }
} 
    
if (process.env.USERNAME === "HP") {
    runProgram(`3
    3
    1 2 3
    5
    1 2 4 6 8
    6
    1 1 9 6 9 4`);
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
