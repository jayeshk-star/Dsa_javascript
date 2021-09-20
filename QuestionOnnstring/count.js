function runProgram(input) {
    //  console.log(input)
   var input=input.trim().split(" ").map(Number) ;
   var [n,m]=input
//    console.log(n,m)
var count=0

for(var x=0;x<9;x++){
    for(var y=0;y<9;y++){
        if(x**2+y==n && y**2+x==m){
      count++;
 }
            
    }
}console.log(count)
    
}  
if (process.env.USERNAME === "HP") {
    runProgram(" 9 3");
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
