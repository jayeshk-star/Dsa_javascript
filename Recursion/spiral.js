function runProgram(input) {
  var input = input.trim().split("\n");
  var n = +input[0];
  var line = 1;
  for (let i = 0; i < n; i++) {
    var row = +input[line];
    line++;
    var mat = [];
    for (let i = 0; i < row; i++) {
      var arr = input[line].trim().split(" ").map(Number);
      line++;
      mat.push(arr);
    }
    var top=0;
  var bottom=row-1;
  var left=0;
  var right=row-1;

  var ans=[]
  while(left<=right  && top<=bottom){
      for(let i=top;i<=bottom;i++){
          ans.push(mat[i][right])
      }
      right--;
      for(let i=right;i>=left;i--){
        ans.push(mat[bottom][i])
    }
    bottom--;
    for(let i=bottom;i>=top;i--){
        ans.push(mat[i][left])
    }
    left++;
    for(let i=left;i<=right;i++){
        ans.push(mat[top][i])
    }
    top++;
  }
  console.log(ans.join(" "))

  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`2
    3
    1 2 3
    4 5 6
    7 8 9
    4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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
