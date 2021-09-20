function runProgram(input) {
    
    var input=input.trim().split("\n");
      
    let test=+input[0];
    
    var que=[]

    for(let i=1;i<=test;i++){
       var arr=input[i].trim().split(" ")
    //    console.log(arr)
       if(arr[0]=="0"){
         que.push(arr[1])
       }else if(arr[0]=="1"){
           console.log(que[que.length-1])
       }else if(arr[0]=="2"){
          que.pop()
       }
        
    }
    }
    
    

   
      
  if (process.env.USERNAME === "HP") {
      runProgram(`42
      0 414
      0 528
      0 555
      0 154
      0 967
      0 625
      0 271
      0 245
      0 794
      0 708
      0 179
      0 336
      0 830
      0 482
      0 50
      0 823
      0 222
      0 632
      0 464
      0 423
      0 718
      1
      2
      1
      2
      2
      2
      2
      1
      1
      1
      2
      1
      2
      1
      1
      1
      2
      2
      2
      1
      1`);
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
  