function runProgram(input) {
    // 
    //  console.log(input)
      
    
    var arr=input.split("")
     var ans=[];
    for(var i=0;i<arr.length;i++){
        for(var j=i;j<arr.length;j++){
            var res=arr.slice(i,j+1)
            var ans=res;
            console.log(ans)
        }
    }
}



if (process.env.USERNAME === "HP") {
    runProgram(`abcd`);
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
