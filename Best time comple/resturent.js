function runProgram(input) {
  input = input.trim().split('\n');
  const t = +input[0];
  const package = [];
  // console.log(package)
  for ( let k = 1; k <= t; k++ ) {
      const query = input[k].trim().split(' ').map(Number)
      let queries = package.length;
      
      if ( query[0] === 1 ) {
          if (queries === 0) {
              console.log( 'No Food' ); 
          }
          else {
              console.log( package[queries-1])
              package.pop()
          }
      }
      else {
          package.push( query[1] )
      }
    
  }
  
    
  }
  if (process.env.USERNAME === "HP") {
    runProgram(`6
    1
    2 5
    2 7
    2 9
    1
    1`);
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
  