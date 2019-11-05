'use strict'

// 1. function max() that takes two numbers as arguments and returns the largest of them
function max (x, y) {
  if (x > y) {
    return 'max is: ' + x
  } else {
    return 'max is: ' + y
  }
}

console.log(max(3, 4))

// 2. function maxOfThree() that takes three numbers as arguments and returns the largest of them
function maxOfThree (x, y, z) {
  var numbers = [x, y, z]
  var max = numbers[0]
  for (var i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i]
    }
  }
  return 'max is: ' + max
}
console.log(maxOfThree(412, 16, 1212))

// 3. function isVowel()
function isVowel (x) {
  if (x.length === 1) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(x.toLowerCase()) !== -1
  } else {
    return 'enter a character between a to z'
  }
}

console.log(isVowel('a'))

// 4. function sum() and a function multiply()
function sumMultiply (numbers) {
  var sum = 0
  var multiple = numbers[0]
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]
    multiple *= numbers[i]
  }
  return 'sum of values: ' + sum + '\n\nmultiple of values: ' + multiple
}

console.log(sumMultiply([1, 2, 3, 4]))

// 5. function reverse()
function reverse (string) {
  var reversed = []
  for (var i = string.length - 1; i >= 0; i--) {
    reversed.push(string[i])
  }
  return reversed.join('')
}

// solution 2
// function reverse (string) {
//     return string.split('').reverse().join('')
// }
console.log(reverse('hello world'))

// 6. function findLongestWord()
function findLongestWord (words) {
  var longestWord = words[0]
  var maxWordLength = 0
  for (var i = 0; i < words.length; i++) {
    if (maxWordLength < words[i].length) {
      maxWordLength = words[i].length
      longestWord = words[i]
    }
  }
  return 'longest word is: ' + longestWord + ' with length ' + maxWordLength
}

console.log(findLongestWord(['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']))

// 7. function filterLongWords()
function filterLongWords (words, i) {
  return words.filter(e => e.length > i)
}
var wor = ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']
console.log(filterLongWords(wor, 4))

// 8. Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…)
const reducer = (accumulator, currentValue) => accumulator + currentValue
const reducerMultiple = (accumulator, currentValue) => accumulator * currentValue

function sumMultiplyFunctional (numbers) {
  var sum = numbers.reduce(reducer)
  var multiply = numbers.reduce(reducerMultiple)
  return 'sum of values: ' + sum + '\n\nmultiple of values: ' + multiply
}
console.log(sumMultiplyFunctional([1, 2, 3, 4]))

// 9. function named findSecondBiggest
function findSecondBiggest (numbers) {
  var biggest, nextBiggest
  biggest = nextBiggest = 0
  for (var i = 0; i < numbers.length; i++) {
    if (biggest < numbers[i]) {
      nextBiggest = biggest
      biggest = numbers[i]
    } else if (nextBiggest < numbers[i] && numbers !== biggest) {
      nextBiggest = numbers[i]
    }
  }
  return nextBiggest
}

console.log(findSecondBiggest([18, 4, 3, 5, 17]))

// 10. function printFibo
function printFibo (len, start1, start2) {
  return !len ? start1 + start2 : printFibo(--len, start1, start2 + start1)
}

console.log(printFibo(3, 0, 1))

// 12. Clock
function startTime () {
  var today = new Date()
  var year = today.getFullYear()
  var month = today.getMonth() + 1
  var day = today.getDate()
  var h = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  document.getElementById('clock').innerHTML = year + '-' + month + '-' + day + ' ' + h
}
