function runProgram(input) {
    var input=input.trim().split("\n");
    // console.log(input)
    var test=+input[0]
    var line=1
    // console.log(test,arr)
    for(let i=0;i<test;i++){
        var subtest=+input[line]
        line++;
        var arr=input[line].trim().split(" ").map(Number)
        line++
      nextNumber(arr)
    }
    
      }
      function nextgrether(arr,ele,index){
        let stack=[];
        for(let i=arr.length-1;i>=0;i--){
            while(stack.length!=0 && ((index=="greather")? arr[stack[stack.length-1]]<arr[i] : arr[stack[stack.length-1]]>arr[i])){
                stack.pop()
            }
            if(stack.length!=0){
                ele[i]=stack[stack.length-1];

            }else{
                ele[i]=-1;
            }
            stack.push(i)
        }
    }
     
    var arr1=[]
     function nextNumber(arr){
         let nextG=new Array(arr.length);
         let smallG=new Array(arr.length);
         for(let i=0;i<arr.length;i++){
             nextG[i]=0;
             smallG[i]=0;
         }
         nextgrether(arr,nextG,"greather")
         nextgrether(arr,smallG,"smaller")

         for(let i=0;i<arr.length;i++){
             if(nextG[i]!=-1 && smallG[nextG[i]]!=-1){
                 arr1.push((arr[smallG[nextG[i]]]+" "));
             }else{
                arr1.push("-1")
             }
         }
        arr1.map(Number)
         var product=1
         for(let j=0;j<arr1.length;j++){
            product=product*arr1[j]
         }
         console.log(product)
     } 
     
     
  if (process.env.USERNAME === "HP") {
      runProgram(`1
      6
      5 1 6 9 5 1`);
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
  