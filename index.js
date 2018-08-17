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
