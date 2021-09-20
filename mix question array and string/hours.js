function runProgram(input) {
  var n = +input;
  var hours = Math.floor(n / 60);
  var min = n % 60;
  var time;
  if (min == 0) {
    time = hours + "hrs" + " " + "0" + min + "mins";
  } else if(hours<=1){
    time = hours + "hr" + " " + min + "mins";
  }else {
    time = hours + "hrs" + " " + min + "mins";
  }
  console.log(time);
}

if (process.env.USERNAME === "HP") {
  runProgram(`65
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
