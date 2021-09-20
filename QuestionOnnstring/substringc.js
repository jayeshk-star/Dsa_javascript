function runProgram(input) {
    //  console.log(input)
     var input=input.trim().split("")
    //  console.log(input) 
      var count=0
     for( var i=0;i<input.length;i++)
     {
         for(j=i;j<input.length;j++)
         {
             var substr=input.slice(i,j+1)
             console.log(substr)
             
             if(substr[i]==substr[input.length])
            {
                count++
            }
        }
     }
console.log(count)
 }

//  function duplicate(input)
//  {
//      var obj={};
//      for(var i=0;i<input.length;i++)
//      {
//         obj[input[i]]=null;
//      }
//      var arr=Object.keys(obj)
//      return arr
//  }
 
if (process.env.USERNAME === "HP") {
    runProgram(`abcab`);
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
