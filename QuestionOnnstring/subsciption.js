function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
     var test=+input[0];
  var line=1;
    for(var i=0;i<test;i++){
        var arr=input[line].trim().split(" ").map(Number)
        
    }
    // console.log(arr)

    var sum=0;
    for(var i=0;i<arr.length;i++){
     sum=sum+arr[i]*(i+1)
    }console.log(sum)
}


if (process.env.USERNAME === "HP") {
    runProgram(`5
    0 1 0 1 0`);
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


