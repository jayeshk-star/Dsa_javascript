function runProgram(input) {
  var input = input.trim().split("\n");
  // console.log(input);
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  sortRecursion(arr, n);

  var newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i]);
  }
  console.log(newarr.join(" "));
}

function sortRecursion(arr, n) {
  if (n == 1) {
    return;
  }
  for (var i = 0; i < n - 1; i++)
    if (arr[i] > arr[i + 1]) {
      var next = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = next;
    }

  sortRecursion(arr, n - 1);
}

if (process.env.USERNAME === "HP") {
  runProgram(`5
      3 5 0 9 8`);
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
