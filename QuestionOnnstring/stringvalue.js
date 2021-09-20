function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("")
    // console.log(input)
    var alphabate=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var sum=0
    for(var i=0;i<input.length;i++){
    var Position = alphabate.indexOf(input[i])+1;
    // console.log(letterPosition)
      sum+=Position
    }
    console.log(sum)

}
    

if (process.env.USERNAME === "HP") {
    runProgram(`aba`);
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
