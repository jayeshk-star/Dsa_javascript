function runProgram(input) {
    //  console.log(input)
   var input=input.split("\n")
//    console.log(input)
   var test=+input[0]
   var arr=input[1].trim().split(" ").map(Number)
//    console.log(test,arr)

var max=0;
var ans=-1;
for( var i=0;i<test;i++){
  var count=1;
for(var j=i+1;j<test;j++)
{
    if(arr[j]==arr[i])
    {
        count++;
        if(max<count){
            max=count;
            ans=arr[i];
        }else if(max==count){
            ans=min(ans,arr[i])
        }
    }
}
}
console.log(ans)
}
if (process.env.USERNAME === "HP") {
    runProgram(`5
    0 2 0 6 9`);
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
