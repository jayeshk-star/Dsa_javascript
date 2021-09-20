function runProgram(input) {
  var input = input.trim().split("\n");
  var n = +input[0];
  for (let i = 1; i <= n; i++) {
    var str = input[i].trim().split("");
    var str1 = [];
    var str2=[]

    for (let k = 0; k < str.length; k++) {
      if (
        str[k] !== "a" ||
        str[k] !== "e" ||
        str[k] !== "i" ||
        str[k] !== "o" ||
        str[k] !== "u"
      ) {
        str2.push(str[k]);
      }
    }
    // for (let j = 0; j < str.length; j++) {
    //   if (
    //     str[j] == "a" ||
    //     str[j] == "e" ||
    //     str[j] == "i" ||
    //     str[j] == "o" ||
    //     str[j] == "u"
    //   ) {
    //     str1.push(str[j]);
    //   }
    // }
    
    
    console.log(str2);
  }
}
if (process.env.USERNAME === "HP") {
  runProgram(`4
    eio
    masaischool
    ubcdefghioel
    rhythm
    `);
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
