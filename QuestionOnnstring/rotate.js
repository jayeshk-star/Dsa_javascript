function runProgram(input) {
    input = input.trim().split("\n");
    var array = [];
    for (var i = 0; i < input.length; i++) {
      array.push(input[i].trim().split(" ").map(Number))
    } 
  //      console.log(array)
    var [n]=array[0]
    

    array.shift()
    for(var i=0;i<n/2;i++)
    {
        for(var j=i;j<n-i-1;j++)
        {
            var temp=array[i][j]
            array[i][j]=array[j][n-i-1]
            array[j][n-i-1]=array[n-i-1][n-j-1]
            array[n-i-1][n-j-1]=array[n-j-1][i]
            array[n-j-1][i]=temp
        }
    }
    var a=array
    // console.log(a)

    for( var i=0;i<a.length;i++){
        console.log(...a[i])
    }

  }if (process.env.USERNAME === "HP") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}