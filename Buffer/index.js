const buffer = Buffer.alloc(5); // create a buffer with 5 bytes of memory

buffer.write("hello"); // write the string "hello" to the buffer

console.log(buffer.toString()); // output the contents of the buffer as a string
