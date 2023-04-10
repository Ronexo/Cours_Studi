/*function isGreaterThanTen(element) {
    return element > 10
  }
  
 /* let numbers = [0, 9, 51, 100, 6, 18, 2]
  
  // Display 2 in the console because it is the index of 51 which is the first value found to be greater than 10.
  console.log(numbers.findIndex(isGreaterThanTen))


  let animals = ['Lion', 'Chat', 'Chien', 'Lion', 'Ours']

// Display 0 in the console because the first 'Lion' value found is at index 0, even if there is a second one at index 3.
console.log(animals.indexOf('Lion'))

// Display 3 in the console because the first 'Lion' value found when starting to browse from the index 2 is at index 3.
console.log(animals.indexOf('Lion', 2))*/

/*let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

let numbers = [0, 900, 1000, 11, 40, 6, 8, 2, 61]

// Display in the console : ['Chat', 'Cheval', 'Chien', 'Lion', 'Ours', 'Tigre']
console.log(animals.sort())

// Display in the console : [0, 1000, 11, 2, 40, 6, 61, 8, 900]
console.log(numbers.sort())

// Function for comparing the length of strings in order to sort them in ascending order
function compareTextLength(a, b) {
  if (a.length > b.length) {
    return 1
  } else if (a.length < b.length) {
    return -1
  }

  // The case where a.length = b.length
  return 0
}

// Display in the console : ['Chat', 'Lion', 'Ours', 'Chien', 'Tigre', 'Cheval']
// 'Chat' has 4 characters, 'Cheval' has 6
console.log(animals.sort(compareTextLength))

// Function for comparing numbers in order to sort them in ascending order
function compareNumbers(a, b) {
  return a - b
}

// Display in the console : [0, 2, 6, 8, 11, 40, 61, 900, 1000]
console.log(numbers.sort(compareNumbers))*/

let webBrowsers = ['Internet Explorer', 'Vivaldi', 'Firefox', 'Chrome', 'Opera', 'Edge']

console.log(webBrowsers);
console.log(webBrowsers.shift());
console.log(webBrowsers);
console.log(webBrowsers.pop());
console.log(webBrowsers);
console.log(webBrowsers.slice(1, 3));
console.log(webBrowsers);