function runProgram(input) {
    var input = input.trim().split("\n");
    var n=+input[0]
    var str=input[1]
    
    var obj={}
    for(let i=0;i<n;i++){
        obj[str[i]]==undefined ? obj[str[i]]=1 : obj[str[i]]++
    }
    // console.log(obj)

    for(let key in obj){
      console.log(key+" "+ obj[key])
    }
   
  }
  
  if (process.env.USERNAME === "HP") {
    runProgram(`10
zbcdazallz`);
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
  