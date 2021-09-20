function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var line = 1;
  for (let i = 0; i < n; i++) {
    var subtest = +input[line];
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;

    //    console.log(subtest,arr)

    var sortarr=arr.sort((a,b)=>a-b)
    // console.log(sortarr)
    var l=0;
    var r=subtest-1;
   
    var max=0;
    var newarr=sortarr[0]
    while(l<r){
        if(arr[l]==-arr[r]){
           
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    // brute force

    //       var newarr=arr[0]
    //       var max=0
    //       var flag=false
    //        for(let j=0;j<subtest;j++){
    //            for(let k=0;k<subtest;k++){
    //                if(arr[j]==-arr[k]){
    //                   newarr=arr[j]
    //                   max=Math.max(newarr,max)
    //                   flag=true
    //                }
    //            }
    //        }
    //        if(!flag){
    //            console.log("-1")
    //        }else{
    //            console.log(max)
    //        }
  }
}
if (process.env.USERNAME === "HP") {
  runProgram(`2
    5
    2 1 -1 -2 3
    5
    -3 2 -4 4 -2`);
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
