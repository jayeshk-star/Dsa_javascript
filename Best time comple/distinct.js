function runProgram(input) {
    // duplicate(input)
    //  console.log(input)
   var input=input.split("")
//    console.log(input)
  var obj={};
for(var i=0;i<input.length;i++)
{
    obj[input[i]]==undefined ? (obj[input[i]]=1):obj[input[i]]++; 
}
//  console.log(obj)
for(var key in obj)
{
    var count=0;
    for( var i=0;i<input.length;i++)
    {
        if(key==input[i])
        {
            count++;
        }
    }
    // console.log(count)
    obj[key]=count;
}
// console.log(obj)
}



// function duplicate(input){
//     var obj={};
//     for(var i=0;i<input.length;i++){
//         obj[input[i]]=null;
//     }
//       var arr=(Object.keys(obj))
//       console.log(arr)
// }

if (process.env.USERNAME === "HP") {
    runProgram(`abcda`);
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