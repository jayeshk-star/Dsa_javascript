function runProgram(input) {
    //  console.log(input)
    var input=input.trim().split("\n")
    console.log(input)
   
   var object={}
      for( var i=0;i<input.length;i++)
      {
          object[input[i]]==undefined?(object[input[i]==1]):object[input[i]]++;
          console.log(object)
      }
     
}
if (process.env.USERNAME === "HP") {
    runProgram(`3
    masai
    school
    masai
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
