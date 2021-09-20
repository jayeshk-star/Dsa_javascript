function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
    var day=input[0];
    var num=+input[1];
    console.log(day)
    console.log(num)
    console.log(input)
    
    var a=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    for(var i=0;i<a.length;i++){
        if(day==a[i]) {
            if(num%7==0)
            {
                console.log(a[i])
            }
            else if(num%7==1)
            {
                console.log(a[i+1])
            }
            else if(num%7==2)
            {
                console.log(a[i+2])
             }
              else if(num%7==3)
             {
                console.log(a[i+3])
             }
             else if(num%7==4)
             {
                console.log(a[i+4])
             }
             else if(num%7==5)
             {
                console.log(a[i+5])
             }
             else
             {
                 console.log(a[i+6])
             }
            
     }
    }

   }
    
if (process.env.USERNAME === "HP") {
    runProgram("Friday\n150");
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


