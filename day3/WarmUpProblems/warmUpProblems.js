// Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.
let addFive = (num) => {
    return num + 5
}

console.log("Calling Add Five Function:" + addFive(10))

// Write a function called “getOpposite”.
// Given a number, return its opposite

let getOppposite = (data) => {

    if (data === 0)
        return 0

    if (Number.isInteger(data)) {
        return (-data)
    } else {
        return -1
    }

}

//calling get Opposite Function //returing -1 for decimal and string

console.log("Opposite of 10 is: " + getOppposite(10))
console.log("Opposite of 1.1 is: " + getOppposite(1.1))
console.log("Opposite of a is: " + getOppposite('a'))

//Create a function that takes a string and returns it as an integer.

let strToNum = (str) => {

    return +str

}

console.log("Converting string to num: " + strToNum('100'))

// Create a function that takes a number as an argument, 
// increments the number by + 1 and returns the result.

let addOne = (num) => {
    return num + 1
}

console.log("Calling Add One Function:" + addOne(10))

// Create a function that takes an array and returns the first element.

let firstArrayEle = (arr) => {
    return arr[0]
}

let arr = [1, 2, 3, 4]

console.log("First Element for array is: " + firstArrayEle(arr))

// Convert Hours into Seconds
// Write a function that converts hours into seconds.

let hourToSeconds = (hour) => {
    return hour * 60
}

console.log("Converted value of hour to second: " + hourToSeconds(2) + "sec")

// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.
let perimeterRect = (l, b) => {
    return 2 * (l + b)
}

console.log("Perimeter of rectangle is: " + perimeterRect(10, 10))

// Calculate the sum of numbers received in a comma delimited string

let str = '1.5,2.3,3.1,4,5.5,6,7,8,9,10.9'



let sumOfStringArray = (str) => {

    let stringArray = str.split(',').map(Number)

    console.log(stringArray)

    let sum = stringArray.reduce((currentTotal, item) => {
        return currentTotal + item
    }, 0)
    return sum
}

console.log("Sum of string array: " + sumOfStringArray(str))