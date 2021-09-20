function runProgram(input) {
    //  console.log(input)
   var input=input.split("\n")
//    console.log(input)
    var test=+input[0]
    var arr=input[1].trim().split(" ").map(Number)
    // console.log(test,arr)
    var count=0
    for( var i=0;i<test;i++)
    {
        for(var j=i+1;j<test;j++)
        {
            if(arr[i]==arr[j])
            {
                count++
            }
        }
    }console.log(count)
 
}
if (process.env.USERNAME === "HP") {
    runProgram(`5
    0 2 0 6 9
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
