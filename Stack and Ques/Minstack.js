function runProgram(input) {
 
  // console.log(input)
var str=input


  

    if (
      ((str[0] == "(" && str[str.length - 1] == ")") || 

      (str[0] == "{" && str[str.length - 1] == "}") ||(str[0] == "[" && str[str.length - 1] == "]")) )
    {
      console.log("balanced");
    } else {
      console.log("not balanced");
    }
  }

if (process.env.USERNAME === "HP") {
  runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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
