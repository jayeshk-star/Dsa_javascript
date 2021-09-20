function runProgram(input) {
  var str = input;
  var newstring = cutString(str);
  console.log(newstring.length);
}
const isPalindrome = (sub) => {
  const len = sub.length - 1;
  for (let i = 0; i < len; i++) {
    if (sub[i] !== sub[len - i]) {
      return false;
    }
    if (i === len - i) {
      return true;
    }
  }
  return true;
};

function cutString(str) {
  const pals = [];
  let sub;
  for (let i = 0; i < str.length; i++) {
    sub = str.charAt(i);
    for (let j = i + 1; j < str.length; j++) {
      sub += str.charAt(j);
      if (isPalindrome(sub)) {
        pals.push(sub);
      }
    }
  }
  return pals.sort((a, b) => b.length - a.length)[0];
}

if (process.env.USERNAME === "HP") {
  runProgram(`a`);
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
