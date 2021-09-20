function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
    tnumber=+input[0]
    number=input[1].trim().split(" ").map(Number)
    // console.log(tnumber)
    // console.log(number)
    
    if(number.includes(42)){
        console.log("Yes")
    }else{
        console.log("No")
    }
     
}
    
if (process.env.USERNAME === "HP") {
    runProgram("5\n10 12 11 4 11");
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


