function runProgram(input) {
    var input=input.trim().split("\n").join("");
    var n=input.length;
    // console.log(input)

    // console.log(input)
    let flag=false
    for(let i=0;i<input.length;i++){
        if( ((input[0]=="(" && input[n-1]==")")  || (input[0]=="[" && input[n-1]=="]") || (input[0]=="{" && input[n-1]=="}")) && (n%2==0)){
            console.log("balanced")
            flag=true;
            break;
        }
        }
        if(!flag){
            console.log("unbalanced")
        }
    }
    
    

   
      
  if (process.env.USERNAME === "HP") {
      runProgram(`(((((((((())))))))))`);
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
  