function runProgram(input) {
  let str = input.trim();

  const s = [];

  let flag = true;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "(":
      case "{":
      case "[":
        s.push(str[i]);
        break;
      case ")":
        if (s.pop() !== "(") {
          flag = false;
        }
        break;
      case "]":
        if (s.pop() !== "[") {
          flag = false;
        }
        break;
      case "}":
        if (s.pop() !== "{") {
          flag = false;
        }
        break;
    }

    if (!flag) {
      break;
    }
  }
  if (flag && s.length === 0) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`(((((((((())))))))))`);
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
