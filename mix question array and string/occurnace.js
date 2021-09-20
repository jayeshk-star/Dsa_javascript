function runProgram(input) {
  var str = input.trim().split("");

  var sortstring = str.sort().join("");

  var obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[sortstring[i]] == undefined
      ? (obj[sortstring[i]] = 1)
      : obj[sortstring[i]]++;
  }
  //    console.log(obj)
  for (let key in obj) {
    console.log(key + " " + obj[key]);
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`masaischool`);
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
