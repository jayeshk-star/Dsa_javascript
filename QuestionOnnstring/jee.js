function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
    user1=input[0].trim().split(" ").map(Number)
    user2=input[1].trim().split(" ").map(Number)
    // console.log(user1)
    // console.log(user2)
    // console.log(input)
    
    var total1=user1[0]+user1[1]+user1[2]
    // console.log(total1)
    var total2=user2[0]+user2[1]+user2[2]
    // console.log(total2)
   

    
    if(total1>total2){
        console.log("First")
    }else if(user1[2]>user2[2] && total2==total1){
        console.log("First")
     } else if(user1[2]<user2[2] && total2==total1){
            console.log("Second")
    }else if(user1[0]>user2[0] && total2==total1 && user1[2]==user2[2] ){
        console.log("First")
      }  else if(user1[0]<user2[0] && total2==total1 && user1[2]==user2[2] ){
            console.log("Second")
    }else if(user1[1]>user2[1]  && total2==total1 && user1[2]==user2[2] && user1[0]==user2[0]){
        console.log("First")
    }else if(user1[1]<user2[1]  && total2==total1 && user1[2]==user2[2] && user1[0]==user2[0]){
        console.log("Second")
    }else{
        console.log("Second")
    }
   
   

   

}
    
if (process.env.USERNAME === "HP") {
    runProgram("120 90 70\n90 80 110");
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
