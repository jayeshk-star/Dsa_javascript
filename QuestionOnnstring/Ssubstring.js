function runProgram(input) {
    // 
    //  console.log(input)
      var unique=duplicate(input)
    //   console.log(unique)
    var len=unique.length;
     
    }


function duplicate(input){
    var obj={};
    for(var i=0;i<input.length;i++){
        obj[input[i]]=null;
    }
      var arr=(Object.keys(obj))
      console.log(arr);
}



if (process.env.USERNAME === "HP") {
    runProgram(`zoomsessionmooz`);
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
