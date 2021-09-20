function runProgram(input) {
  var input = input.trim().split("\n");
  // console.log(input)
  var test = +input[0];

  var line = 1;
  for (let i = 0; i < test; i++) {
    var [subtest, target] = input[line].trim().split(" ").map(Number);
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    //  console.log(subtest,target,arr)

    var sortArr = arr.sort((a, b) => a - b);
    //  console.log(sortArr)

    var l = 0;
    var flag = false;
    var r = arr.length - 1;

    while (l < r) {
      if (arr[l] + arr[r] == target) {
        console.log("Yes");
        flag = true;
        break;
      } else if (arr[l] + arr[r] > target) {
        r--;
      } else {
        l++;
      }
    }
    if (!flag) {
      console.log("No");
    }
  }
}
if (process.env.USERNAME === "HP") {
  runProgram(`2
    5 31
    10 11 13 17 21
    5 44
    10 11 13 17 21`);
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
