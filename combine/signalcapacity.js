function runProgram(input) {
    var input = input.trim().split("\n");
    // console.log(input)
  
    var test = +input[0];
    var line = 1;
    // console.log(test,arr)
    for (let i = 0; i < test; i++) {
      var subtest = +input[line];
      line++;
      var arr = input[line].trim().split(" ").map(Number);
      line++;
      // console.log(arr,subtest)
  
      var stack = [];
      let ans = [];
      // ans[0]=-1;
      for (let i = 0; i < subtest; i++) {
        var count = 1;
        while (arr[i] >= arr[stack[stack.length-1]] && stack.length != 0) {
          temp = stack.pop();
          count += ans[temp];
        }
        
        ans[i] = count;
        stack.push(i);
      }
  
      console.log(ans.join(" "));
    }
  }
  if (process.env.USERNAME === "HP") {
    runProgram(`2
        7
        100 80 60 70 60 75 85
        5
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
  