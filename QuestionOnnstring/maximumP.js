function runProgram(input) {
    //  console.log(input)
    var input=input.trim().split("\n")
    // console.log(input)
    var test=+input[0];

    var line=1;
    for( var i=0;i<test;i++){
        var len=+input[line]
        line++;
        var arr=input[line].trim().split(" ").map(Number)
        line++;
        // console.log(len,arr)
     

        var max=-Infinity;
        for(var j=0;j<arr.length;j++){
            for( var k=j+1;k<arr.length;k++){
                var product= arr[j]*arr[k];
                // console.log(j,k)
                // console.log(product)
            if(product>max){
                max=product;
            }

            }
        }console.log(max)
     }
    }
if (process.env.USERNAME === "HP") {
    runProgram(`3
    4
    1 0 3 5
    5
    1 2 3 4 5
    3
    1 2 3
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
