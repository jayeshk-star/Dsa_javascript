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

    let r = 0;
    let l = number - 1;

    Sortarr = arr.sort((a, b) => a - b);
    // console.log(Sortarr)

    var flag = false;
    while (r < l) {
      if (Sortarr[r] + Sortarr[l] == target) {
        console.log("1");
        flag = true;
        break;
      } else if (Sortarr[r] + Sortarr[l] > target) {
        l--;
      } else {
        r++;
      }
    }
    if (!flag) {
      console.log("-1");
    }
  }
}
if (process.env.USERNAME === "HP") {
  runProgram(`2
    5 2
    3 4 0 2 7 
    3 2
    1 5 3`);
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
