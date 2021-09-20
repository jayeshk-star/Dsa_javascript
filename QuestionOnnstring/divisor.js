function runProgram(input) {
    //  console.log(input)
    input=input.trim().split(" ")
    var left=+input[0];
    var right=+input[1];
    var k=+input[2]
    // console.log(left)
    // console.log(right)
    // console.log(k)
    // console.log(input)

    var count=0
    for( var i=left;i<=right;i++){
        
        if(i% k==0){
            count++
            
        }
    }console.log(count)
    

}
    
if (process.env.USERNAME === "HP") {
    runProgram("10 100 10");
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


