// Reverse String
//
// Instructions: Given a string, return a new string with the reversed order of characters
//
// Function reverse(str) { … }

// Steps (solution #1)
// 1.	Method: Array.prototype.reverse()
// 2.	Convert string to array
// a.	Const arr = Str.split(‘’)
// b.	.split takes every character in the string an makes it an array item
// c.	method uses an empty string
// 3.	Call reverse method on array
// a.	arr.reverse();
// 4.	Join array back to a string
// a.	arr.join(‘‘)
// b.	.join will join all the array items back into a string
// c.	method uses an empty string
// 5.	Return result
// a.	Return arr.join(‘‘)
// b.	4-5 go on same line of code

// Fast Solution:

Function reverse(str) {
  return str.split(‘’).reverse().join(‘’);
}

// Steps (solution #2)
// 1.	Method: use for loop
// 2.	Create an empty string called ‘reversed’
// a.	Let reversed = ‘ ’;
// 3.	Take each character in provided string and add it to the start of ‘reversed”
// a.	For (let character of str) { reversed = character + reversed; }
// 4.	Return the variable ‘reversed’

Function reverse(str) {
	Let reversed = ‘’;
	For (let character of str) {
		Reversed = character + reversed
	}
	return reversed
}

// Steps (solution #3)
// 1.	Method:
// 2.	Convert string to array
// 3.	Use reduce helper
// a.	Reduce((reversed, character) => {return character + reversed;}, ‘’)
// b.	Used to take all different values of an array and condense them into one single value
// c.	Takes 2 arguments
// i.	Arrow function
// ii.	Starting initial value (in this case an empty string)

Function reverse(str) {
	Return str.split(‘’).reduce((rev, char) => char + rev, ‘’);
}


////////////////////////////////////////////////////////////////////////////////

// Palindrome
//
// Instructions: Given a string, return true if the string is a palindrome (same both ways) or false if not
//
// Function palidrome(str) { … }
//
// Steps (solution #1)

Function palidrome(str) {
  Const reversed = str.split(‘’).reverse().join(‘’);
  Return str === reversed;
}

// Steps (solution #2)
// •	Method: every()
// o	Checks if every item matches with another corresponding item (ie. first/last)
// o	Not ideal solution, checks/does more than is necessary
// •	Return Str.split(‘’).every((character, index) => { … })
// •	{Return character === str[str.length - i - 1];}); }
//

////////////////////////////////////////////////////////////////////////////////

// Integer Reversal
//
// Instructions: given an integer, return an integer that is the reverse ordering of numbers
//
// Function reverseInt(n) { }
//
// Steps (solution #1)
// •	method: reverse string

function reverseInt(n) {
  const reversed = n.toString().split(‘’).reverse().join(‘’);
  if (n<0) { return parseInt(reversed) * -1; }
  return parseInt(reversed);
}

// Steps (solution #2)
// •	method: math	.sign()
// o	if passed positive number it returns 1, if negative returns -1

function reverseInt(n) {
  const reversed = n.toString().split(‘’).reverse().join(‘’);
  return parseInt(reversed) * math.sign(n);
}

////////////////////////////////////////////////////////////////////////////////


Max Chars

Instructions: given a string, return the character that is most commonly used in the string

Function maxChar(str) { }

Steps (solution #1)
•	method: convert string to object
o	used for any problem counting number of each type of characters in a string
o	the keys are the characters in the string, the values are the number of times

Function maxChar(str) {
  const string = “Hello There!”
  const charMap = {};
  let max = 0;
  let maxChar = ‘ ’;
  for (let char of str) {
    if (charMap[char]) { charMap[char]++; }
    else { charMap[char] = 1; }} //creates char variable, iterates over each item in string, add a property to chars for each character iterated over
    //for of loops used to iterate through strings/arrays
    for (let char in charMap) {
      if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char; }}
      return maxChar; }
      //iterates over characters in object, sets max to highest character and maxChar to name of that character, then return maxChar
      //for in loops used to iterate through objects

////////////////////////////////////////////////////////////////////////////////


// FizzBuzz
//
// Instructions: console.log the numbers between 1 to n. For multiples of 3 print ‘fizz’, for multiples of 5 print ‘buzz’, for multiples of 3 and 5 print ‘fizzbuzz’, otherwise print the value
//
// Steps (solution #1)
// •	iterate from 1 to n
// •	if…else statements

function fizzBuzz(num) {
for (let i = 1; i <= num; i++;) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(‘fizzbuzz’);
	} else if (i % 3 === 0) {
		console.log(‘fizz’)
	} else if (i % 5 === 0) {
		console.log(‘buzz’)
	} else {
		console.log(i); }}}

////////////////////////////////////////////////////////////////////////////////


// Array Chunking 

// Instructions: given an array and chunk size, divide the array into many subarrays where eah subarray is of length “size”

// Steps (solution #1)

function chunk(array, size){
  const chunkArr = [];
  array.forEach(item =>{
    const last = chunkArr[chunkArr.length -1] 
    if(!last || last.length === size){
      chunkArr.push([item])
    } else {
      last.push(item)
    }
  })
  return chunkArr
}

// Steps (solution #2)

function chunk(array, size){
  const chunkArr = [];
  let index = 0;

  while(index < array.length){
    chunkArr.push(array.slice(index, index + size))
    index += size
  }
  return chunkArr
}

////////////////////////////////////////////////////////////////////////////////


// Anagrams

// Instructions: check to see if two provided strings are anagrams of each other (use same characters, in same quanitity, but different orders)

// Steps (solution #1)

function anagrams(stringA, stringB){
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

anagrams('str ing', 'ringst!!!')


// Steps (solution #2)

function anagrams(stringA, stringB){
  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length){
    return false;
  }

  for (let char in charMapA){
    if(charMapA[char] !== charMapB[char]){
      return false
    }
  }

  return true
}

function buildCharMap(str){
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap
}

anagrams('string', 'ringst!!!')



////////////////////////////////////////////////////////////////////////////////


// Sentence Capitalization

// Instructions: write function that accepts a string. The function should capitalize the first letter of each word then return the capitalized string.

// Steps (solution #1)

function capitalize(str){
  let strArr = str.split(' ')
  let capArr = strArr.map(string => string[0].toUpperCase() + 
string.slice(1))
  return capArr.join(' ')
}

capitalize('this is a string')

// Steps (solution #2)

function capitalize(str){
	return = str[0].toUpperCase()
	for(let i = 1; i < str.length; i++){
		if(str[i – 1] === ‘’){
		result += str[i].toUpperCase();
	} else {
		result += str[i]
	}

	return result
}

capitalize('this is a string')



////////////////////////////////////////////////////////////////////////////////


// Printing Steps

// Instructions:Write a function that takes a positive number N, the function should console.log a step shape with N levels using the character #. Make sure the step has spaces on the right hand side. 

// Ex: steps(3)
// “#     ”
// “##  ”
// “###”

// Steps (solution #1)

function steps(n){
  for (let row = 0; row < n; row++){
    let stair = ''

    for (let col = 0; col < n; col++){
      if(col <= row){
        stair += '#'
      } else {
        stair += ' '
      }
    }
    console.log(stair)
  }
}


// Steps (solution #2) – recursive 

function steps(n, row = 0, stair = ''){
  if(n === row){
    return;
  }

  if(n === stair.length){
    console.log(stair)
    steps(n, row++)
  }

  if(stair.length <= row){
    stair += '#'
  } else {
    stair += ' '
  }
  steps(n, row, stair)
}

////////////////////////////////////////////////////////////////////////////////


// 2-Sided Steps (Pyramids)

// Instructions: Write a function that takes a positive number N, the function should console.log a pyramid shape with N levels using the character #. Make sure the pyramid has spaces on both the left and right hand sides. 

// Steps (solution #1)

function pyramid(n){
  const midpoint = Math.floor((2 * n - 1) / 2)

  for (let row = 0; row < n; row++){
    let level = ''

    for (let col = 0; col < 2 * n - 1; col++){
      if (midpoint - row <= col && midpoint + row >= col){
        level += '#'
      } else {
        level += ' '
      }
    }
    console.log(level)
  }
}


// Steps (solution #2) – recursive

function pyramid(n, row = 0, level = ''){
  const midpoint = Math.floor((2 * n - 1) / 2)
  let add;

  if (row === n){
    return
  }

  if (level.length === 2 * n - 1){
    console.log(level)
    return pyramid(n, row++)
  }

  if (midpoint - row <= level.length && midpoint + row >= level.length){
    add = '#'
  } else {
    add = ' '
  }
  pyramid(n, row, level + add)
}



////////////////////////////////////////////////////////////////////////////////


// Find the Vowels

// Instructions:

// Steps (solution #1)


////////////////////////////////////////////////////////////////////////////////


// Enter the Matrix Spiral

// Instructions:

// Steps (solution #1)


////////////////////////////////////////////////////////////////////////////////


// Runtime Complexity

// Instructions:

// Steps (solution #1)



////////////////////////////////////////////////////////////////////////////////


// Runtime Complexity – Fibonacci 

// Instructions:

// Steps (solution #1)



////////////////////////////////////////////////////////////////////////////////


// The Queue 

// Instructions:

// Steps (solution #1)



////////////////////////////////////////////////////////////////////////////////


// Underwater Queue Weaving

// Instructions:

// Steps (solution #1)



////////////////////////////////////////////////////////////////////////////////


// Stack Em Up with Stacks

// Instructions:

// Steps (solution #1)



////////////////////////////////////////////////////////////////////////////////


// Two Become One

// Instructions:

// Steps (solution #1)




////////////////////////////////////////////////////////////////////////////////


// Linked Lists

// Instructions:

// Steps (solution #1)



////////////////////////////////////////////////////////////////////////////////


// Find the Midpoint

// Instructions:

// Steps (solution #1)




////////////////////////////////////////////////////////////////////////////////


// Circular Lists

// Instructions:

// Steps (solution #1)



////////////////////////////////////////////////////////////////////////////////


// Step Back from the Tail

// Instructions:

// Steps (solution #1)



////////////////////////////////////////////////////////////////////////////////


// Building a Tree

// Instructions:

// Steps (solution #1)



////////////////////////////////////////////////////////////////////////////////


// Tree Width with Level Width

// Instructions:

// Steps (solution #1)


////////////////////////////////////////////////////////////////////////////////


// Binary Search Trees

// Instructions:

// Steps (solution #1)



////////////////////////////////////////////////////////////////////////////////


// Validating a Binary Search Tree

// Instructions:

// Steps (solution #1)




////////////////////////////////////////////////////////////////////////////////


// JavaScript Events

// Instructions:

// Steps (solution #1)



////////////////////////////////////////////////////////////////////////////////


// Building Twitter

// Instructions:

// Steps (solution #1)



////////////////////////////////////////////////////////////////////////////////


// Sorting with BubbleSort 

// Instructions:

// Steps (solution #1)


////////////////////////////////////////////////////////////////////////////////


// Sort by Selection

// Instructions:

// Steps (solution #1)



////////////////////////////////////////////////////////////////////////////////


// MergeSort

// Instructions:

// Steps (solution #1)




////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////

