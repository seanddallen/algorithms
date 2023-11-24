/////////////////////////////////////////////////////////////////////////////////////////
				STANDARD ALGORITHMS
/////////////////////////////////////////////////////////////////////////////////////////


//Mean
//Instructions: Calculate Mean
//Steps (solution #1)

function mean(numbers) {
  let sum = 0; 

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length; 
}


////////////////////////////////////////////////////////////////////////////////
	
	
//Median
//Instructions: Calculate Median
//Steps (solution #1)

function median(numbers) {
    let median = 0
    numbers.sort();
    if (numbers.length % 2 === 0) {
      median = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
    } else { 
      median = numbers[(numbers.length - 1) / 2];
    }
    return median;
}
	
	
////////////////////////////////////////////////////////////////////////////////


//Mode
//Instructions: Calculate Mode
//Steps (solution #1)

let mode = function(arr){
    let numMap = {};
    for(var i = 0; i < arr.length; i++){
        if(numMap[arr[i]] === undefined){
            numMap[arr[i]] = 0;
        }        
            numMap[arr[i]] += 1;
    }
    let greatestFreq = 0;
    let mode;
    for(let prop in numMap){
        if(numMap[prop] > greatestFreq){
            greatestFreq = numMap[prop];
            mode = prop;
        }
    }
    return parseInt(mode);
}


////////////////////////////////////////////////////////////////////////////////

Next...

/////////////////////////////////////////////////////////////////////////////////////////
				RANDOM ALGORITHMS
/////////////////////////////////////////////////////////////////////////////////////////

	
//Intense String
//Instructions: Strings are intense if they end in three or more more ! marks. However, having ! marks anywhere but the end makes for a non-intense string
//Steps (solution #1)

function intenseString(str) {
  let bangCount = 0; 

  for (let i = str.indexOf('!'); i < str.length; i++) {
    if (str[i] !== '!') {
      return false
    } else {
      bangCount++
    }
  }
  if (bangCount < 3) {
    return false
  }
  return true
}

////////////////////////////////////////////////////////////////////////////////	


//Rock-Paper-Scissors-Lizard-Spock
//Instructions: Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.
//Steps (solution #1)

function RPSLS(p1, p2){
  return p1 === p2 ? "Draw" : 
    (p1 === 'scissors' && p2 === ('paper' || 'lizard')) || 
    (p1 === 'rock' && p2 === ('scissors' || 'lizard')) || 
    (p1 === 'paper' && p2 === ('rock' || 'spock')) || 
    (p1 === 'lizard' && p2 === ('spock' || 'paper')) || 
    (p1 === 'spock' && p2 === ('scissors' || 'rock'))
    ? "Player 1 Wins!" : "Player 2 Wins!" 
}



/////////////////////////////////////////////////////////////////////////////////////////
		CODING INTERVIEW BOOTCAMP ALGORITHMS AND DATA STRUCTURES
/////////////////////////////////////////////////////////////////////////////////////////

		
// Reverse String

// Instructions: Given a string, return a new string with the reversed order of characters

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

// Instructions: Given a string, return true if the string is a palindrome (same both ways) or false if not

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

// Instructions: given an integer, return an integer that is the reverse ordering of numbers

// Steps (solution #1)
	// method: reverse string

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


// Factorial 

// Instructions: given number (num) return the factorial of the number (ex: num = 3: (3*2*1 = 6)

//Steps (solution #1)

function factorial(num){
  let total = 1;
  for (let i = num; i > 1; i--){
    total *= i;
  }
  return total
}

function factorial(num){
  let total = 1;
  for (let i = 2; i <= num; i++){
    total *= i;
  }
  return total
}

//Steps (solution #2) - recursive 

function factorial(num){
  if (num === 1){return 1}
  return num * factorial(num-1)
}


////////////////////////////////////////////////////////////////////////////////


Max Chars

Instructions: given a string, return the character that is most commonly used in the string

Function maxChar(str) { }

//Steps (solution #1)
	// method: convert string to object
	// used for any problem counting number of each type of characters in a string
	// the keys are the characters in the string, the values are the number of times

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

// Instructions: write a function that returns the number of vowels used in a string

// Steps (solution #1)

function vowels(str){
  let count = 0
  const vowelMatch = ['a', 'e', 'i', 'o', 'u']

  for (let char of str.toLowerCase()){
    if (vowelMatch.includes(char)){
      count++
    }
  }
}


// Steps (solution #2)

function vowels(str){
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}


////////////////////////////////////////////////////////////////////////////////


// Enter the Matrix Spiral

// Instructions: write a function that accepts an integer n and returns a nxn spiral matrix
	// Ex: matrix(3) 
	// [[1, 2, 3],
	//  [8, 9, 4],
	//  [7, 6, 5]]

// Steps (solution #1)

function matrix(n){
  const results = []

  for (let i = 0; i < n; i++){
    results.push([])
  }

  let counter = 0;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while(startColumn <= endColumn && startRow <= endRow){
    //top row
    for(let i = startColumn; i <= endColumn; i++){
      results[startRow][i] = counter
      counter++
    }
    startRow++

    //right column
    for(let i = startRow; i <= endRow; i++){
      results[endColumn][i] = counter
      counter++
    }
    endColumn--

    //bottom row
    for(let i = endColumn; i >= startColumn; i--){
      results[endRow][i] = counter
      counter++
    }
    endRow--

    //start column
    for(let i = endRow; i >= startRow; i--){
      results[startColumn][i] = counter
      counter++
    }
    startColumn++    

  }

  console.log(results)
}


////////////////////////////////////////////////////////////////////////////////


// Runtime Complexity – Fibonacci 

// Instructions: Print out the nth entry in the fibonacci series

Steps (solution #1)

function fib(n){
  const series = [0, 1]

  for (let i = 2; i <= n; i++){
    const a = series[i - 1]
    const b = series[i - 2]

    series.push(a + b)
  }
  return series[n]
}

Steps (solution #2) - recursive

function fib(n){
  if (n < 2){
    return n;
  }
  return fib(n-1) + fib(n-2)
}

	
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

	
	
/////////////////////////////////////////////////////////////////////////////////////////
			ALGORITHMS AND DATA STRUCTURES MASTERCLASS
/////////////////////////////////////////////////////////////////////////////////////////	
	
	
//

//Instructions: 
			
//Steps (solution #1)


////////////////////////////////////////////////////////////////////////////////

			
			
			
/////////////////////////////////////////////////////////////////////////////////////////
				HUNDRED ALGORITHM CHALLENGE
/////////////////////////////////////////////////////////////////////////////////////////
	

//Absolute Values Sum Minimization

//Instructions: Given a sorted array of integers a, find an integer x from a such that the value of    
	//abs(a[0] – x) + abs(a[1] – x) + … + abs(a[a.length – 1] – x)   
//is the smallest possible (abs = absolute value). Basically return the median value. If there are several possible answers output the smallest one. 

//Steps (solution #1)

function absoluteValueSumMinimization(a){
  const isEven = a.length % 2 === 0; 
  return isEven ? a[a.length/2 - 1] : a[Math.floor(a.length / 2)]
}


////////////////////////////////////////////////////////////////////////////////


//Add Params

//Instructions: write a function that returns the sum of all numbers given in params

//Steps (solution #1)

function addParams(...args){
  total = 0; 
  args.forEach(arg => total += arg)
  return total 
}


////////////////////////////////////////////////////////////////////////////////

	
//Add Border 

//Instructions: Given a rectangular matrix of characters, add a border of asterisks(*) to it	
//Ex: [“abc”, “def”] returns [“*****”, “*abc*”, “*def*”, “*****”]
//Steps (solution #1)

function addBorder(matrix){
  const wall = '*'.repeat(matrix[0].length + 2)
  matrix.unshift(wall)
  matrix.push(wall)

  for (let i = 1; i < matrix.length - 1; i++){
    matrix[i] = '*'.concat(matrix[i]).concat('*')
  }
  return matrix
}


////////////////////////////////////////////////////////////////////////////////

	
//Add Two Digits

//Instructions: you are given a two digit integer n. return the sum of the two digits

//Steps (solution #1)

function addTwoDigits(num){
  let nums = num.toString().split('')
  return parseInt(nums[0]) + parseInt(nums[1])
}

//Steps (solution #2)

function addTwoDigits(num){
  let sum = 0;
  num.toString().split('').forEach(num => sum += parseInt(num))
  return sum
}


////////////////////////////////////////////////////////////////////////////////

	
//Adjacent Elements Product

//Instructions: Given an array of integers, find the pair of adjacent elements that has the largest product and return that product

//Steps (solution #1)

function greatestAdjacentProduct(arr){
  let greatestProduct = 0;
  let currentProduct = 0;

  for (let i = 0; i < arr.length; i++){
    currentProduct = arr[i] * arr[i+1]
    if (currentProduct > greatestProduct){
      greatestProduct = currentProduct
    }
  }
  return greatestProduct
}
	
	
////////////////////////////////////////////////////////////////////////////////

	
//All Longest Strings

//Instructions: Given an array of strings, return another array containing all of its longest strings

//Steps (solution #1)

function longestStrings(arr){
  let longest = 0; 
  const longestStrArr = [];

  arr.forEach(str => longest = longest < str.length ? str.length : longest)

  arr.forEach(str => {
    if(str.length === longest){
      longestStrArr.push(str)
    }
  })

  return longestStrArr;
}



////////////////////////////////////////////////////////////////////////////////


//Almost Increasing Sequence

//Instructions: given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array (remove 1 item and the rest will be in ascending order)

//Steps (solution #1)

function almostIncreasingSequence(arr){
  let count = 0;
  
  for(let i = 0; i < arr.length; i++){
    if (arr[i] === arr[i+2]) {
      return false
    }
    if (arr[i] < arr[i+1]){
      console.log(arr[i])
    } else if (arr[i] >= arr[i+1]){
      count++
      if(count > 1){
        return false
      } 
    }
  }
  return true
}
	
	
////////////////////////////////////////////////////////////////////////////////


//Alphabetic Shift

//Instructions: Given a string, replace each of its characters by the next one in the alphabet	

//Steps (solution #1)

function alphabeticShift(str){
  let shiftedStr = ''
  for (char of str){
    let lowerChar = char.toLowerCase()
    if (lowerChar === 'z'){
      shiftedStr += 'a'
    } else {
      shiftedStr += String.fromCharCode(lowerChar.charCodeAt()+1)
    }
  }
  return shiftedStr
}


////////////////////////////////////////////////////////////////////////////////
	

//Alphabet Subsequence

//Instructions: check whether the given string is a subsequence of the plaintext alphabet (every character is in alphabetical order with no repeats)

//Steps (solution #1)

function alphabetSubsequence(str){
  let lowerStr = str.toLowerCase()
  for (let i = 0; i < lowerStr.length; i++){
    if (i < lowerStr.length - 1){
      if (lowerStr[i].charCodeAt() >= lowerStr[i+1].charCodeAt()){
        return false
      }
    }
  }
  return true
}
	
	
////////////////////////////////////////////////////////////////////////////////


//Alternating Sums

//Instructions: Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third to team one, etc. You are given an array of positive integers – the weights of people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete. 

//Steps (solution #1)

function alternatingSums(arr){
  let group1 = 0;
  let group2 = 0;

  for (let i = 0; i < arr.length; i++){
    if (i % 2 === 0){
      group1 += arr[i]
    } else {
      group2 += arr[i]
    }
  }
  return [group1, group2]
}


////////////////////////////////////////////////////////////////////////////////
	
//Are Equally Strong

//Instructions: Call two arms equally strong if the heaviest weights they each are able to lift are equal. 
	//Call two people equally strong if their strongest arms are equally strong (wehether left or right) and so are their weakest arms. 
	//Given your and your friend’s arms’ lifting capabilities, find out if the two of you are equally strong. 

//Steps (solution #1)

function areEquallyStrong(myLeft, myRight, friendLeft, friendRight){
  let equallyStrong = false; 

  if (Math.max(myLeft, myRight) === Math.max(friendLeft, friendRight) && Math.min(myLeft, myRight) === Math.min(friendLeft, friendRight)){
    equallyStrong = true; 
  }

  return equallyStrong;
}

//Steps (solution #2)

function areEquallyStrong(myLeft, myRight, friendLeft, friendRight){
  const myWeakest = myLeft <= myRight ? myLeft : myRight; 
  const myStrongest = myLeft >= myRight ? myLeft : myRight; 
  const friendWeakest = friendLeft <= friendRight ? friendLeft : friendRight; 
  const friendStrongest = friendLeft >= friendRight ? friendLeft : friendRight; 

  return myStrongest === friendStrongest && myWeakest === friendWeakest;
}

	
////////////////////////////////////////////////////////////////////////////////


//Are Similar

//Instructions: Given two arrays check if they are similar. Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays. 

//Steps (solution #1)

function areSimilar(a, b){
  let c = []
  let d = []

  if(a.toString() === b.toString()){
    return true
  }

  for (let i = 0; i < a.length; i++){
    if (a[i] !== b[i]){
      c.push(a[i])
      d.push(b[i])
    }
  }

  d = d.reverse()

  if(c.length === 2 && (c.toString() === d.toString())){
    return true
  }

  return false
}


////////////////////////////////////////////////////////////////////////////////
	

//Array Change

//Instructions: You are given an array of integers. On each move you are allowed to increase exactly one of its elements by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input. 

//Steps (solution #1)

function arrayChange(arr){
  let moves = 0;

  for (let i = 1; i < arr.length; i++){
    while(arr[i] <= arr[i-1]){
      arr[i]++
      moves++
    }
  }

  return moves; 
}	

//Steps (solution #2) – better (no nested loop)

function arrayChange(arr){
  let moves = 0;

  for (let i = 0; i < arr.length; i++){
    if(arr[i] >= arr[i+1]){
      const difference = (arr[i] + 1) - arr[i + 1];
      arr[i + 1] = arr[i] + 1
      moves += difference
    }
  }

  return moves; 
}

	
////////////////////////////////////////////////////////////////////////////////

	
//Array Conversion

//Instructions: Given an array of integers, perform the following operations until the array contains only one element: On the 1st, 3rd, 5th, etc. iterations, replace each pair of consecutive elements with  their sum. On the 2nd, 4th, 6th, etc. iterations, replace each pair of consecutive elements with their product. When finished, there should be a single number left in the array. Return that number. 

//Steps (solution #1)

function arrayConversion(arr){
  let isOdd = true;

  while(arr.length !== 1){
    arr = sumProduct(arr, isOdd)
    isOdd = !isOdd;
  }
  return arr[0]; 
}

function sumProduct(nums, isOdd){
  const sumProducts = []
  if(isOdd){
    for(let i = 0; i < nums.length; i += 2){
      console.log(nums[i])
      sumProducts.push(nums[i] + nums[i + 1])
    }
  } else {
    for(let i = 0; i < nums.length; i += 2){
      sumProducts.push(nums[i] * nums[i + 1])
    }
  }
  return sumProducts;
}


////////////////////////////////////////////////////////////////////////////////
	

//Array Max Consecutive Sum

//Instructions: Given an array of integers, find the maximal possible sum of some of its k consecutive elements. 

//Steps (solution #1)
function arrayMaxConsecutiveSum(arr, k){
  let sum = 0; 
  let max = 0; 

  for (let i = 0; i < k; i++){
    sum += arr[i]
  }

  max = sum; 

  for (let i = k; i < arr.length; i++){
    sum -= arr[i-k]
    sum += arr[i]
    if(sum > max){
      max = sum;
    }
  }

  return max;
}

	
////////////////////////////////////////////////////////////////////////////////


//Array Maximal Adjacent Difference

//Instructions: Given an array of integers, find the maximal absolute difference between any two of its adjacent elements. 

//Steps (solution #1)

function arrayMaxAdjacentDifference(arr){
  let maxDiff = 0;

  for (let i = 0; i < arr.length; i++){
    if(Math.abs(arr[i] - arr[i - 1]) > maxDiff){
      maxDiff = Math.abs(arr[i] - arr[i - 1])
    } else if(Math.abs(arr[i] - arr[i + 1]) > maxDiff){
      maxDiff = Math.abs(arr[i] - arr[i + 1])
    }
  }

  return maxDiff;
}

//Steps (solution #2)

function arrayMaxAdjacentDifference(arr){
  let maxDiff = Math.abs(arr[0] – arr[1]);

  for (let i = 0; i < arr.length; i++){
	let absDiff = Math.abs(arr[i-1] – arr[i]);
	maxDiff = absDiff > maxDiff ? absDiff : maxDiff; 
  }

  return maxDiff;
}


////////////////////////////////////////////////////////////////////////////////
	
	
//Array Previous Less

//Instructions: Given an array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead. 

//Steps (solution #1)

function arrayPreviousLess(arr){
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--){
    for (let j = i; j >= 0; j--){
      if(arr[i] > arr[j]){
        newArr.unshift(arr[j]);
        break;
      } else if(j === 0){
        newArr.unshift(-1)
      }
    }
  }
  return newArr;
}
	
	
////////////////////////////////////////////////////////////////////////////////


//Array Replace

//Instructions: Given an array of integers, replace all the occurences of elemToReplace with substitutionElem. 

//Steps (solution #1)

function arrayReplace(arr, repEl, subEl){
  let subArr = [];

  arr.forEach(item => {
    if(item === repEl){
      item = subEl
    }
    subArr.push(item)
  })

  return subArr;
}


////////////////////////////////////////////////////////////////////////////////
	

//Avoid Obstacles

//Instructions: You are given an array of integers representing coordinates of obstacles situated on a straight line. Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer. Find the minimal length of the jump enough to avoid all the obstacles. 

//Steps (solution #1)

function avoidObstacles(arr){
  arr = arr.sort((a, b) => a - b)
  const largestVal = arr[arr.length - 1]

  for(let i = 1; i <= largestVal + 1; i++){
    if(arr.every(el => el % i !== 0)){
      return i
    }
  }
}	
	
	
////////////////////////////////////////////////////////////////////////////////


//Bishop and Pawn

//Instructions: given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop	can capture the pawn in one move. The bishop has no restrictions in distance for each move, but it is limited to diagonal movement. 

//Steps (solution #1)

function bishopAndPawn(bishop, pawn){
  const board = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8
  };

  const bishopX = board[bishop[0]]
  const bishopY = parseInt(bishop[1])
  const pawnX = board[pawn[0]]
  const pawnY = parseInt(pawn[1])

  if(bishopX + bishopY === pawnX + pawnY || bishopX + pawnY === pawnX + bishopY){
    return true;
  }

  return false; 
}


////////////////////////////////////////////////////////////////////////////////
	
	
//Box Blur

//Instructions: Last night you had to study, but decided to party instead. Now there is a black and white photo of you that is about to go viral. You cannot let this ruin your reputation, so you want to apply box blur algorithm to the photo to hide its content. The algorithm works as follows: each pixel x in the resulting image has a value equal to the average value of the input image pixels’ values from the 3x3 square with the center at x. All pixels at the edges are cropped. As pixel’s value is an integer, all fractions should be rounded down. 

/* EX: [[1,1,1],
     [1,7,1],
     [1,1,1]]
Output: [[1]] (15/9 rounded down) */

//Steps (solution #1)

function boxBlur(image){
  const res = []

  for(let y = 0; y < image.length - 2; y++){
    const line = []
    
    for(let x = 0; x < image[y].length - 2; x++){
      let sum = 0
      let count = 0

      for(let a = y; a < y + 3; a++){
        for(let b = x; b < x + 3; b++){
          sum += image[a][b]
          count++
        }
      }

      line.push(Math.floor(sum/count))
    }
    res.push(line)
  }
  return res
}	
	
	
////////////////////////////////////////////////////////////////////////////////


//Candies

//Instructions: n children have m pieces of candy. They want to eat as much candy as they can, 
//but each child must eat the exact same amount of candy as every other child. 
//Determine how many pieces of candy will be eaten by all the children together. Candies cannot be split. 
//EX: candies(n=3, m=10) => 9 (each child will eat 3)

//Solution #1: 
	
function candies(n, m){
  return Math.floor(m/n) * n
}


////////////////////////////////////////////////////////////////////////////////
	
	
//Character Parity

//Instructions: Given a character, return 'odd', 'even', or 'not a digit'

//Solution #1: 	
	
function characterParity(char){
    return isNaN(parseInt(char)) ? 'not a digit' : parseInt(char) % 2 === 0 ? 'even' : 'odd'
}
	
	
////////////////////////////////////////////////////////////////////////////////


//

//Instructions:

//Solution #1: 


////////////////////////////////////////////////////////////////////////////////
	
	
//

//Instructions:

//Solution #1: 	
	
	
////////////////////////////////////////////////////////////////////////////////


//

//Instructions:

//Solution #1: 


////////////////////////////////////////////////////////////////////////////////
	
	
//

//Instructions:

//Solution #1: 	
	
	
////////////////////////////////////////////////////////////////////////////////


//

//Instructions:

//Solution #1: 


////////////////////////////////////////////////////////////////////////////////
	
	
//

//Instructions:

//Solution #1: 	
	
	
////////////////////////////////////////////////////////////////////////////////


//

//Instructions:

//Solution #1: 


////////////////////////////////////////////////////////////////////////////////
	
	
//

//Instructions:

//Solution #1: 	
	
	
////////////////////////////////////////////////////////////////////////////////


//

//Instructions:

//Solution #1: 


////////////////////////////////////////////////////////////////////////////////
	
	
//

//Instructions:

//Solution #1: 	
	
	
////////////////////////////////////////////////////////////////////////////////


//

//Instructions:

//Solution #1: 


////////////////////////////////////////////////////////////////////////////////
	
	
//

//Instructions:

//Solution #1: 	
	
	
////////////////////////////////////////////////////////////////////////////////


//

//Instructions:

//Solution #1: 


////////////////////////////////////////////////////////////////////////////////
	
	
//

//Instructions:

//Solution #1: 	
	
	
////////////////////////////////////////////////////////////////////////////////


//

//Instructions:

//Solution #1: 


////////////////////////////////////////////////////////////////////////////////
	
	
//

//Instructions:

//Solution #1: 	
	
	
////////////////////////////////////////////////////////////////////////////////


//

//Instructions:

//Solution #1: 


////////////////////////////////////////////////////////////////////////////////
	
	
//

//Instructions:

//Solution #1: 	
	
	
////////////////////////////////////////////////////////////////////////////////


//

//Instructions:

//Solution #1: 


////////////////////////////////////////////////////////////////////////////////
	
	
//

//Instructions:

//Solution #1: 	
	
	
////////////////////////////////////////////////////////////////////////////////


//

//Instructions:

//Solution #1: 


////////////////////////////////////////////////////////////////////////////////
	
	
//

//Instructions:

//Solution #1: 	
	
	
////////////////////////////////////////////////////////////////////////////////


//

//Instructions:

//Solution #1: 


////////////////////////////////////////////////////////////////////////////////
	
	
//

//Instructions:

//Solution #1: 	
	
	
////////////////////////////////////////////////////////////////////////////////

	
	
