function runProgram(input) {
    var str=""
    for( var i=0;i<input.length;i=i+2)
    {
        for(var j=0;j<Number(input[i+1]);j++)
        {
            str=str+input[i];
        }
    }
    console.log(str)
   
    }
    if (process.env.USERNAME === "HP") {
        runProgram(`a3b2`
       );
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
    



