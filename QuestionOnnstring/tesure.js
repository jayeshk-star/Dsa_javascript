function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
    // console.log(input)
    var test=+input[0];
    var line=1;
    for( var i=0;i<test;i++){

        var array=input[line].trim().split(" ").map(Number)
        line++;
        // console.log(array)
    
    var sum=0
    for ( var j=0;j<array.length;j++){
        sum+= array[j];
       var equal= (sum/3)
    }  
    
    if(sum%3==0 && array[0]<=equal && array[1]<=equal && array[2]<=equal ){
        
            console.log("Yes")
        
        
    }else{
        console.log("No")
    }

   
} 
} 
if (process.env.USERNAME === "HP") {
    runProgram(`4
    5 3 1 9 
    100 101 102 105 
    10 20 15 14 
    101 101 101 3
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
