function runProgram(input) {
    input = input.trim().split('\n');
    const t = +input[0];
    const stack = [];
    for ( let i = 1; i <= t; i++ ) {
        const operation = input[i].trim().split(' ').map(Number);
        let items = stack.length;
        if ( operation[0] === 1 ) {
            stack.push( operation[1] );
        }
        else if ( operation[0] === 2 ) {
            if ( items !== 0 ) {
                stack.pop()
            }
        }
        else {
            if ( items !== 0 ) {
                console.log( stack[ items-1 ] );
            }
            else {
                console.log( 'Empty!' );
            }
        }
    }
  }
  if (process.env.USERNAME === "HP") {
    runProgram(`2
      5 2
      3 4 0 2 7 
      3 2
      1 5 3`);
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
  