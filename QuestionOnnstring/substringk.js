function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
     var test=+input[0];

     var target=input[input.length-1]
    //  console.log(test,target)
  var str=[]
  var line=1
    for(var i=0;i<test;i++)   {
        var line=+input[line]
        line++
        var string=input[line].split("")
        line++
        str.push(string)
        console.log(str)
    }
}


if (process.env.USERNAME === "HP") {
    runProgram(`1
    4
    aman
    a`);
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


