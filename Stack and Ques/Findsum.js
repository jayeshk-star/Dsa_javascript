function runProgram(input) {
    input = input.trim().split('\n')
    const n = +input[0]
    const arr = input[1].trim().split(' ').map(Number)
    const y_values = nextGreater( arr, n )
    const x_values = greaterNeighbour( arr, n )

    let res = result( x_values, y_values )
    console.log( res.trim() )

    function result( x, y ) {
        let ans = ''
        let sum;
        for ( let i = 0; i < n ; i++ ) {
            sum = x[i] + y[i]
            ans += ` ${sum}`
        }
        return ans 
    }


    function greaterNeighbour( arr, n ) {
        const s = []
        const ans = []
        let x;

        for ( let i = 0; i < n; i++ ) {
            while( s.length !== 0 && arr[i] > arr[s[s.length-1]] ) {
                s.pop()
            }
            ans.push( s.length === 0 ? -1 : s[s.length-1] +1 )
            s.push( i )
        }
        return ans 
    }


    function nextGreater( arr, n ) {
        const s = []
        const ans = []
        let x;
        for ( let i = 0; i < n; i++ ) {

            while ( s.length !== 0 && arr[i] > arr[s[s.length-1]] ) {
                x = s.pop()
                ans[x] = i + 1
            }
            s.push( i )

        }
        s.forEach( i => ans[i] = -1 )

        return ans 
    }      }
  if (process.env.USERNAME === "HP") {
      runProgram(`5
      5 4 1 3 2`);
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
  