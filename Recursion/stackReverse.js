function runProgram(input) {
  var input = input.trim().split("\n");


  for (let i = 0; i < input.length - 1; i++) {
    var value=input[i]
    console.log(insert_at_bottom(value))
    
  }
  
}
let st = [];

function insert_at_bottom(x) {
  if (st.length == 0) st.push(x);
  else {
    let a = st.pop();
    insert_at_bottom(x);

    st.push(a);
    
  }
}


function reverse() {
  if (st.length > 0) {
    let x = st.pop();
    reverse();

    insert_at_bottom(x);
  }
}


if (process.env.USERNAME === "HP") {
  runProgram(`1
    2
    3
    4
    -1`);
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
