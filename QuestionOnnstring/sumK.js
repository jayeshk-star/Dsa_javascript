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

    // console.log(arr)
    var current_sum = arr[0];
    // console.log(current_sum)
    let start = 0;
    let flag = false;

    for (let i = 1; i <=number; i++) {
      while (current_sum >target && start < i -1) {
        current_sum = current_sum - arr[start];
        start++;
      }
      if (current_sum == target) {
          console.log("Yes")
          flag = true;
          break;
      }
      if (i < number) {
        current_sum = current_sum + arr[i];
      }

      if(flag){
        break;
      }
    }

    if(!flag)
    {
      console.log("No")
    }

    
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`5
        5 3
        1 2 1 3 4
        4 5
        3 2 3 1
        3 2
        1 2 1
        2 1
        1 1
        2 1
        3 1`);
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
