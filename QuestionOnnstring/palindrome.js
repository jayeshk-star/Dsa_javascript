function runProgram(input) {
    //  console.log(input)
    input=input
    var reverse=input.trim().split("")
     var a=[];
    for(var i=reverse.length-1;i>=0;i--){
        a.push(reverse[i])
    }   var join=a.join('')
    // console.log(join)
    if(input==join){
        console.log("Yes")
    }else{
        console.log("No")
    }
    
    
}  
if (process.env.USERNAME === "HP") {
    runProgram(`1221`);
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
