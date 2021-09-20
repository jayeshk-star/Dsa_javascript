function runProgram(input) {
    //  console.log(input)
   var input=input.split("\n")
//    console.log(input)
    var test=+input[0]
    var arr=input[1].trim().split(" ").map(Number)

  var obj={};
for(var i=0;i<test;i++)
{
    obj[arr[i]]==undefined ? (obj[arr[i]]=1):obj[arr[i]]++; 
   
}
// console.log(obj)
var count=1;
var ans=arr[0];
for(key in obj){
    if(obj[key]>count)
    {
        count=obj[key];
        ans=key;
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
