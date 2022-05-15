// Method 1
/**
 * 
 * @param {takes input as 0 and 1 and reverses it} input 
 * @returns 
 */
function reverse(input) {
    return (input + 1) % 2;
  }
  console.log("LN 4- FOR 0 --", reverse(0));
  console.log("LN 5- FOR 1--", reverse(1));

// Method 2

  function reverse1(input) {
    return input + 1 - 2 * input;
  }
  console.log("LN 10 input =0:", reverse1(0));
  console.log("LN 11 input =1:", reverse1(1));

// Method 3

  function reverse2(input) {
    return Number(!input);
  }
  console.log("LN 16 input =0:", reverse2(0));
  console.log("LN 17 input =1:", reverse2(1));