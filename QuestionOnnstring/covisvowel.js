function runProgram(input) {
  //
  //  console.log(input)
  var unique = duplicate(input);
  var length = 4;

  var arr = [];
  var count = 0;
  for (var i = 0; i < input.length; i++) {
    for (var j = i; j < input.length; j++) {
      var substr = input.slice(i, j + 1);
      if (substr.length >= length) {
        arr.push(substr);
      }
    }
  }
  for (var i = 0; i < arr.length; i++) {
    if (
      arr[i].includes("a") &&
      arr[i].includes("i") &&
      arr[i].includes("o") &&
      arr[i].includes("u")
    ) {
      count++;
    }
  }
  console.log(count);
}

function duplicate(input) {
  var obj = {};
  for (var i = 0; i < input.length; i++) {
    obj[input[i]] = null;
  }
  var arr = Object.keys(obj);
  return arr;
}

if (process.env.USERNAME === "HP") {
  runProgram(`dangerouscovid
  `);
} else {
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
