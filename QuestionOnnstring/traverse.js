function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")

    var dim=input[0].trim().split(" ").map(Number)
    var [row,col]=dim

    var mat=[]
    var line=1;
    for( var i=0;i<row;i++)
    {
       mat.push(input[line].trim().split(" ").map(Number))
       line++;
    }
    var ans=[];
    for(i=col-1;i>=0;i--)
    {
        for(j=0;j<row;j++)
        {
            ans.push(mat[j][i])
         
        }
    }
    console.log(ans.join(" "))
}
    
if (process.env.USERNAME === "HP") {
    runProgram(`4 3
1 8 9
2 7 10
3 6 11
4 5 12
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


