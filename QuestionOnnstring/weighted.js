function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
    // console.log(input)
    var test=+input[0];
    var line=1;
    for( var i=0;i<test;i++){
        var length=+input[line]
        line++;
        var array=input[line].trim().split(" ").map(Number)
        line++;
        // console.log(length,array)
    
    var sum=0
    for ( var j=0;j<array.length;j++){
        sum+= array[j]*(j+1);
       
    }  console.log(sum)
}
}  
if (process.env.USERNAME === "HP") {
    runProgram(`2
    5
    1 2 3 4 5
    2
    100 1
    `);
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
