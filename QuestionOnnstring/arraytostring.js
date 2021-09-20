function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
    var number=+input[0];
    var array=input[1].trim().split(" ").map(Number);
    //  console.log(array)
    

     var newarr=[]
     var array1;
    for(var i=0;i<array.length;i++){
       if(array[i]<0){
             array1=(array[i]=0)
             newarr.push(array1)
       }else{
           array1=(array[i])
           newarr.push(array1)
       }
       
    
    }  var string=newarr.join('')
    console.log(string)
       
    
        

}
if (process.env.USERNAME === "HP") {
    runProgram(`5
    2 5 6 8 5`);
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
