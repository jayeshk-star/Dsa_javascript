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
        
       var sum=0;
        for(var j=0;j<array.length;j++){
           sum+=array[j];
        }if(sum%2==1){
            console.log("Yes")
        }else{
            console.log("No")
        }
    }
}  
if (process.env.USERNAME === "HP") {
    runProgram(`3
    1
    1
    2
    1 101
    2
    1 200`);
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
