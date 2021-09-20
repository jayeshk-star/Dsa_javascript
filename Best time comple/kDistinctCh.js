function runProgram(input) {
  //  console.log(input)
  input = input.trim().split("\n");
  var [number, target] = input[0].trim().split(" ").map(Number);
  var str = input[1].trim().split("");
  // console.log(number,target,str)

  let count = 0;
  for (let i = 0; i < target; i++) {
    var a = {};
    for (j = i; j < i + target; j++) {
      // console.log(str[j])
      if (a[str[j]] >= 1) {
        a[str[j]]++;
      } else {
        a[str[j]] = 1;
      }
      if (Object.keys(a).length == target) {
        count++;
        //    console.log(Object.keys(a))
      }
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "HP") {
  runProgram(`5 2
    abcde`);
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
