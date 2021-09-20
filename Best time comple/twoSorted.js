function runProgram(input) {
  //  console.log(input)
  input = input.trim().split("\n");
  var test = +input[0];

  let line = 1;
  for (let i = 0; i < test; i++) {
    var number = +input[line];
    line++;
    var arr1 = input[line].trim().split(" ").map(Number);
    line++;
    var arr2 = input[line].trim().split(" ").map(Number);
    line++;
    // console.log(arr1,arr2)

    let sort1 = arr1.sort((a, b) => a - b);
    let sort2 = arr2.sort((a, b) => a - b);
    console.log(sort1,sort2)

    let s = 0;
    let f =number-1
    // console.log(sort2[f])
    
    let count = 0;

    while(s<f){
        if(sort1[s]==sort2[f])
        {
            count++;
            s++;
            f--;
        }
        else if(sort1[s]<sort2[f])
        {
             s++;
        }
        else{
            f--
        }
        
        console.log(count)
    
    }
   
   
}
}
if (process.env.USERNAME === "HP") {
  runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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
