function runProgram(input) {
  //  console.log(input)
  input = input.trim().split("\n");
  // console.log(input)

  var line = 1;
  for (var i = 0; i < +input[0]; i++) {
    var [number, target] = input[line].trim().split(" ").map(Number);
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;

    var obj = {};
    for (let j = 0; j < arr.length; j++) {
      obj[arr[j]] == undefined ? (obj[arr[j]] = 1) : obj[arr[j]]++;
    }
    // console.log(obj);
    var sum = arr.reduce((a, b) => a + b);
    // console.log(sum);
    var total_sum = (number * (number + 1)) / 2;
    // console.log(total_sum);

    var diff = total_sum - sum;
    // console.log(diff);

    for (let key in obj) {
      if (obj[key] > 1) {
        console.log((Number(key) + diff) + " " + key);
      }
    }
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2
    
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
