function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
    

    var mat=[]
    for( var i=0;i<3;i++)
    {
       mat.push(input[i].trim().split(" "))
    
    }
    // console.log(mat)
    
    let count=0;
    for(var i=0;i<3;i++)
    {
    
        
            if((mat[i][0]==mat[i][1] && mat[i][1]==mat[i][2] ) )  
            {
                console.log(mat[i][0])
                count++;
                break;
           
            }
            else 
                if(mat[0][i]==mat[1][i] && mat[1][i]==mat[2][i])
                {
                console.log(mat[0][i]);
                count++;
                    break;
                }
            else 
                if(mat[0][0]==mat[1][1] && mat[1][1]==mat[2][2])
                {
                    console.log(mat[0][0])
                    count++;
                    break;
                }
            else 
                if(mat[2][0]==mat[1][1] && mat[1][1]==mat[0][2])
                {
                    console.log(mat[2][0])
                    count++;
                    break;
                }
            }
        
            if(count==0)
            {
                console.log("Tie")
            }
    
   
    
}
    
if (process.env.USERNAME === "HP") {
    runProgram(`
    x o x
    o o x
    o o o
    `);
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


