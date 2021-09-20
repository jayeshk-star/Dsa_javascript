function runProgram(input) {
    input=input.trim().split("\n");
    // console.log(input);
    var test=+input[0];
    // console.log(test);
    
    var line=1;
    for(var i=0;i<test;i++)
    {
        var [row,col]=input[line].trim().split(" ").map(Number);
        line++;
        var mat=[];
        for(var j=0;j<row;j++)
        {
            mat.push(input[line].trim().split(" ").map(Number))
            line++
        }

        var ans=[];
        var right=row-1;
        var left=0;
        var bottom=row-1;
        var top=0;
        
      for(let i=bottom ;i>=top ;i--)
      {
          ans.push(mat[i][left])
      }  
      left++ ;
      for(let i=left ;i<=right ;i++)
      {
          ans.push(mat[top][i])
      }  
      top++;
      for(let i=top;i<=bottom ;i++)
      {
          ans.push(mat[i][right])
      } 
      right--
      for(let i=right;i>=left ;i--)
      {
          ans.push(mat[bottom][i])
      } 
      console.log(ans.join(" "))
    }
   
}
    
if (process.env.USERNAME === "HP") {
    runProgram(``);
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


