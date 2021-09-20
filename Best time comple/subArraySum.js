function runProgram(input) {
  //  console.log(input)
  input = input.trim().split("\n");
  var test=+input[0];

  var line=1;
  for( let i=0;i<test;i++)
  {
    var subtest=+input[line];
    line++;
    var arr=input[line].trim().split(" ").map(Number);
    line++;
    // console.log(subtest,arr)
    var new1=[]
    for (j = 0; j < subtest; j++) {
      for (k = j; k < subtest; k++) {
        var subarray = arr.slice(j, k + 1);
        // console.log(subarray)
         new1.push(subarray)
         
        }
      }
      console.log(new1.length)
  }


  
  }

if (process.env.USERNAME === "HP") {
  runProgram(`3
  8
  1 2 1 3 2 7 4 2
  5
  1 2 1 3 4
  4
  1 2 2 1`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
