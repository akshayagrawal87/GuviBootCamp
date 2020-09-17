// Getting input via STDIN

//source:https://www.geeksforgeeks.org/generate-all-the-binary-strings-of-n-bits/

//This is problem number 35 in strings in


//length of binary string
let len = 2

let result = []

let arr = []

//function to add the grey binary code to result array
function addTheSequence(arr, n) {

    let temp = ""
    //running loop to geneta binary code from single array
    for (let i = 0; i < n; i++) {

        temp += arr[i]

    }
    result.push(temp)

}
//function to generate the sequence using recursion
function sequenceGenerator(arr, n, i) {

    if (n === i) {
        addTheSequence(arr, n);
        return
    }



    // First assign "0" at ith position 
    // and try for all other permutations 
    // for remaining positions 

    arr[i] = 0
    sequenceGenerator(arr, n, i + 1);

    // And then assign "1" at ith position 
    // and try for all other permutations 
    // for remaining positions 
    arr[i] = 1
    sequenceGenerator(arr, n, i + 1);

}


sequenceGenerator(arr, len, 0)

console.log(...result)

//end-here

//output
// 00 01 10 11

//Problem face 
/* the generate binary code should be sorted*/