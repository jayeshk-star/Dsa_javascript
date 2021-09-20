
    function runProgram(input) {
        //  console.log(input)
        input=input.trim().split("\n")
        // console.log(input)
    
    
        var line=1;
        for( var i=0;i<+input[0];i++)
        {
            var [number,target]=input[line].trim().split(" ").map(Number);
            line++;
            var arr=input[line].trim().split(" ").map(Number)
            line++;
            let flag=false
            

            for(var j=0;j<number-1;j++)
            {
                for( var k=j+1;k<number;k++)
                {
                    if(arr[j]<=target)
                    {
                        if(arr[j]+arr[k]===target){
                            console.log(j, k)
                            flag=true;
                            break;
                        }
                    }
                }
                if(flag)
                {
                    break;
                }
            } 
            if(!flag){
                console.log(-1, -1)
            }  
    }
}
    if (process.env.USERNAME === "HP") {
        runProgram(`4
        4 9
        2 7 11 15
        5 10
        1 2 3 5 5
        2 100
        48 49
        2 50
        10 20`);
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
    



