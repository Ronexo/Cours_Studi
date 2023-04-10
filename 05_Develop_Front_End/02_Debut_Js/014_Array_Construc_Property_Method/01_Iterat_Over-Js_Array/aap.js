// Returns the result of the addition of array accumulator and array current value.
// accumulator : value returned by sumReducer() of the elements already browsed in the array
// currentValue : value of the element being processed in the array
/*function sumReducer(accumulator, currentValue) {
    return accumulator + currentValue
  }
  
  let numbers = [0, 9, 5, 4, 6, 8, 2]
  
  // Display in the console the value returned by reduce : 34
  // Step-by-step explanation (accumulator + currentValue) : 0 + 9 | 9 + 5 | 14 + 4 | 18 + 6 | 24 + 8 | 32 + 2
  console.log(numbers.reduce(sumReducer))
  // expected output: 34
  
  // Display in the console the step-by-step results
  let stepResults = []
  let stepArray = numbers.slice()
  stepResults.push(stepArray)
  for (let i = 0; i < numbers.length - 1; i++) {
    stepArray.splice(i, 2, stepArray[i] + stepArray[i + 1])
    stepResults.push(stepArray.slice())
  }
  console.log(stepResults)
  // expected output: [[0, 9, 5, 4, 6, 8, 2], [9, 5, 4, 6, 8, 2], [14, 4, 6, 8, 2], [18, 6, 8, 2], [24, 8, 2], [32, 2], [34]]
  
  // Example of a result with an initial value (6) passed in parameter : 40
  // Step-by-step : 6 + 0 | 6 + 9 | 15 + 5 | 20 + 4 | 24 + 6 | 30 + 8 | 38 + 2
  console.log(numbers.reduce(sumReducer, 6))
  // expected output: 40
  
  // Display in the console the step-by-step results
  stepResults = []
  stepArray = [6].concat(numbers)
  stepResults.push(stepArray)
  for (let i = 0; i < numbers.length; i++) {
    stepArray.splice(i, 2, stepArray[i] + stepArray[i + 1])
    stepResults.push(stepArray.slice())
  }
  console.log(stepResults)
  // expected output: [[6, 0, 9, 5, 4, 6, 8, 2], [6, 9, 5, 4, 6, 8, 2], [15, 5, 4, 6, 8, 2], [20, 4, 6, 8, 2], [24, 6, 8, 2], [30, 8, 2], [38, 2], [40]]
  
  // Display -34 in the console (0 - 9 | -9 - 5 | -14 - 4 | ...)
  console.log(numbers.reduce(function(accumulator, currentValue) {
    return accumulator - currentValue
  }))
  // expected output: -34
  
// Display in the console the step-by-step results
stepResults = []
stepArray = numbers.slice()
stepResults.push(stepArray)
for (let i = 0; i < numbers.length - 1; i++) {
  stepArray.splice(i, 2, stepArray[i] - stepArray[i + 1])
  stepResults.push(stepArray.slice())
}
console.log(stepResults)
// expected output: [[0, 9, 5, 4, 6, 8, 2], [-9, 5, 4, 6, 8, 2], [-9, -1, 6, 8, 2], [-9, -1, -2, 8, 2], [-9, -1, -2, -2, 2], [-9, -1, -2, -2], [-9, -1, -2], [-9, -1], -10, -34]

// Display 66 in the console (initial value : 100), (100 - 0 | 100 - 9 | 91 - 5 | ...)
console.log(numbers.reduce(function(accumulator, currentValue) {
  return accumulator - currentValue
}, 100))
// expected output: 66

// Display in the console the step-by-step results
stepResults = []
stepArray = [100].concat(numbers)
stepResults.push(stepArray)
for (let i = 0; i < numbers.length; i++) {
  stepArray.splice(i, 2, stepArray[i] - stepArray[i + 1])
  stepResults.push(stepArray.slice())
}
console.log(stepResults)
// expected output: [[100, 0, 9, 5, 4, 6, 8, 2], [100, -9, 5, 4, 6, 8, 2], [100, -9, -1, 4, 6, 8, 2], [100, -9, -1, -2, 6, 8, 2], [100, -9, -1, -2, -2, 8, 2], [100, -9, -1, -2, -2, -6, 2], [100, -9, -1, -2, -2, -6, -2], [100, -9, -1, -2, -2, -6], [100, -9, -1, -2, -2], [100, -9, -1, -2], [100, -9, -1], [100, -9], [100], 66] */

let productStocks = [15, 184, 29, 0, 35];

console.log(productStocks.every(function(element) {
  return element > 0
}))

function isGreaterThanZero(element) {
  return element > 0
}

let productStockss = [15, 184, 29, 0, 35]

console.log(productStockss.every(isGreaterThanZero))