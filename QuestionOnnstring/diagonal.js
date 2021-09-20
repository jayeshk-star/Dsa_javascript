function runProgram(input) {
    input=input.trim().split("\n");
    // console.log(input);
    var [row,col]=input[0].trim().split(" ").map(Number)
    // console.log(row,col);
    var target=+input[input.length-1];
    // console.log(target)
    
    var line=1;
    var arr=[];
    for(var i=0;i<row;i++)
    {
        arr.push(input[line].trim().split(" ").map(Number))
        line++;
    }
    // console.log(arr)

    
    var a=[];
    var b=[];
    var tr;
    var tc;
    for(let i=0;i<row;i++)
    {
        for(let j=0;j<col;j++)
        {

            if(arr[i][j]==target)
           {
              tr=i;
              tc=j;
           }
        }
    }

        for(let i=0;i<row;i++)
    {
        for(let j=0;j<col;j++)
        {

           if(i+j==tr+tc )
           {
               a.push(arr[i][j])
           }
           if(i-j==tr-tc)
           {
              var k= b.push(arr[i][j])

           }
           
    }

    }

   console.log(...b,...a)
}
    
if (process.env.USERNAME === "HP") {
    runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9
    6`);
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


