function runProgram(input) {
  var input = input.trim().split("\n");
  var subtest = +input[0];

  var arr = [];
  for (let i = 1; i <= subtest; i++) {
    arr.push(+input[i]);
  }
  smallerNumberAfterGreater(arr)

  function nextGreater(arr, nextgreter, order) {
    let stack = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      while (
        stack.length != 0 &&
        (order == "G"
          ? arr[stack[stack.length - 1]] <= arr[i]
          : arr[stack[stack.length - 1]] >= arr[i])
      )
        stack.pop();

      if (stack.length != 0) 
      {
          nextgreter[i] = stack[stack.length - 1];
      }
      else 
      { 
          nextgreter[i] = -1;
      }

      stack.push(i);
    }
  }

  function smallerNumberAfterGreater(arr) {
    let NG = new Array(arr.length);
    let RS = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      NG[i] = 0;
      RS[i] = 0;
    }

    nextGreater(arr, NG, "G");

    nextGreater(arr, RS, "S");
     
    var arr2=[]
    for (let i = 0; i < arr.length; i++) {
      if (NG[i] != -1 && RS[NG[i]] != -1){
     arr2.push((arr[RS[NG[i]]] + " "));
      } 
      else {
         arr2.push("-1 ");
      }
    }
    console.log(arr2.join(""))
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`8
      3
      7
      1
      7
      8
      4
      5
      2`);
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
