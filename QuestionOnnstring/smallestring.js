function runProgram(input) {
    //  console.log(input)
    input=input

   v
   nsole.log(max)

    // console.log(input)
  var input_length=input.length;





    /*str_length = str.length
    max_distinct = max_distinct_char(str)
  
    min_str_len = str_length
  
    for j in (0..str_length)
      for k in (0..str_length)
        sub_str = str[j..k]
        sub_str_length = sub_str.length
        sub_distinct_char_length = max_distinct_char(sub_str)
  
        if (sub_str_length < min_str_len && max_distinct == sub_distinct_char_length)
          min_str_len = sub_str_length
          sub_string = sub_str
        end
      end
    end
    sub_string
  end
  */
}
    

if (process.env.USERNAME === "HP") {
    runProgram("zoomsessionmooz");
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
