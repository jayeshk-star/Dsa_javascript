function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
    var totalnum=+input[0];
    var num=input[1].trim().split(" ").map(Number)
    // console.log(totalnum)
    // console.log(num)
   var count=0
    for( var i=0;i<totalnum;i++){
        if((num[i+1]>num[i] && num[i+1]>num[i+2] || num[0]>num[1] || num[totalnum-1]>num[totalnum-2] )){
            count++
        }
    }console.log(count)
   }
    
if (process.env.USERNAME === "HP") {
    runProgram(`8
    1 2 3 4 2 1 6 5
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


