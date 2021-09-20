function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
    nz=input[0].trim().split(" ").map(Number)
    eng=input[1].trim().split(" ").map(Number)
    
     if(nz[0]>eng[0]){
      console.log("New Zealand")
     }else if(nz[1]>eng[1] && nz[0]==eng[0]){
     console.log("New Zealand")
    }else if(nz[2]>eng[2] && nz[0]==eng[0] && nz[1]==eng[1]){
     console.log("New Zealand")
}else{
   console.log("England")
}
}
    
if (process.env.USERNAME === "HP") {
    runProgram("241 15 21\n241 15 26");
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


