function runProgram(input) {

input = input.trim().split('\n')
    const [ n, t ] = input[0].trim().split(' ').map(Number)
    const arr = input[1].trim().split(' ').map(Number)
    let count = 0

    for ( let i = 0; i < n; i++ ) {
        if ( arr[i] >= arr[t-1] && arr[i] > 0 ) {
            count++
        }
        else {
            break
        }
    }
 
    console.log(count)    
    

}
      
  if (process.env.USERNAME === "HP") {
      runProgram(`8 5
      10 9 8 7 7 7 5 5`);
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
  