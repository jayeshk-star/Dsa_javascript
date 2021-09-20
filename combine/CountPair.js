function runProgram(input) {
  //  console.log(input)
  input = input.trim().split("\n");
  // console.log(input)
  var [number, target] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);

  let r = 0;
  let l = number - 1;

  Sortarr = arr.sort((a, b) => a - b);
  // console.log(Sortarr)

  var flag = false;
  var count = 0;
  while (r < l) {
    if (Sortarr[r] + Sortarr[l] == target) {
      count++;
      r++;
      l--
    } else if (Sortarr[r] + Sortarr[l] > target) {
      l--;
    } else {
      r++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "HP") {
  runProgram(`5 2
    3 4 0 2 7 
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
