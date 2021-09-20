function runProgram(input) {
    input = input.trim().split(/[\r\n]+/);

    let n = +input[0];
    let inp = input[1].trim().split("");
  
    //console.log(n, inp);
  
    let stack = [];
    for (let i = 0; i < n; i++) {
      if (top(stack) == inp[i]) {
        stack.pop();
      } else {
        stack.push(inp[i]);
      }
    }
    if (stack.length != 0) {
      console.log(stack.join(""));
    } else {
      console.log(-1);
    }
    function top(inp) {
      if (inp.length == 0) {
        return "Empty!";
      } else {
        return inp[inp.length - 1];
      }
    }
    }
    
    

   
      
  if (process.env.USERNAME === "HP") {
      runProgram(`5
      aabbc`);
  } else { 
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function(input) {
          read += input;
      });
      process.stdin.on("end", function() {
          read = read.replace(/\n$/, "");
          read = read.replace(/\n$/, "");
          runProgram(read);
      });
      process.on("SIGINT", function() {
          read = read.replace(/\n$/, "");
          runProgram(read);
          process.exit(0);
      });
  }
  