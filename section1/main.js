// 1. Coding Challenge: Array Manipulation
//  Task: Write a JavaScript function that takes an array of numbers and returns an array
// with all even numbers doubled and odd numbers unchanged.
// - Example Input: `[1, 2, 3, 4]`
// - Example Output: `[1, 4, 3, 8]`

const input = [1, 2, 3, 4]

const evenDoubler = (arrayOfNumbers) => {
  return arrayOfNumbers.map((element) => {
    if (element % 2 === 0) {
      return element * 2
    } else {
      return element
    }
  })
}

// 2. Conceptual Question:
// What are the differences between `==` and `===` in JavaScript?

// === is called strict equality in JavaScript. It expects that not only are the values equal, but they are also the same type. For example: “1” === 1 is false, because “1” is a string and 1 is an integer. Using == would try to convert them to the same type before comparing, so they would be true.