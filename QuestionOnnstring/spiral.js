function runProgram(input) {
    input=input.trim().split("\n");
    // console.log(input);
    
    // console.log(test);
    var test=+input[0];
    var line=1;
    for( var i=0;i<test;i++)
    {
        var [row,col]=input[line].trim().split(" ").map(Number)
        line++;
        var mat=[]
        for( var j=0;j<row;j++)
        {
            mat.push(input[line++].trim().split(" ").map(Number))
        }
        // console.log(row,col)
        
        var ans=[];
        var right=col-1;
        var left=0;
        var bottom=row-1;
        var top=0;
        var c=1
        
        while(c<=(row*col))
        { 
      for(let i=bottom ;i>=top &&c<=row*col ;i--)
      {
          ans.push(mat[i][left])
          c++;
      }  
      left++ ;
      for(let i=left ;i<=right &&c<=row*col  ;i++)
      {
          ans.push(mat[top][i])
          c++;
      }  
      top++;
      for(let i=top;i<=bottom  &&c<=row*col ;i++)
      {
          ans.push(mat[i][right])
          c++;
      } 
      right--
      for(let i=right;i>=left  &&c<=row*col ;i--)
      {
          ans.push(mat[bottom][i])
          c++;
      } 
      bottom--
    }
      console.log(ans.join(" "))
    
}
    }



    
if (process.env.USERNAME === "HP") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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


