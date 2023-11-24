/////////////////////////////////////////////////////////////////////////////////////////
				     CODE WARS KATA
/////////////////////////////////////////////////////////////////////////////////////////
	
	
//Summation (Kata - 8)
	
//Instructions: Write a program that finds the summation of every number from 1 to num. 
//The number will always be a positive integer greater than 0.
	
//Steps (solution #1)

var summation = function(num) {
  let sum = 0;
  for (let i = num; i >= 1; i--){
    sum += i
  }
  return sum
}


//Steps (solution #2)

function summation(num) {
  return num * (num + 1) / 2
}
	
const summation = num => num * (num + 1) / 2;


////////////////////////////////////////////////////////////////////////////////


//Sum of Positive (Kata - 8)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	
function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sum += arr[i]
    }
  }
  return sum
}


//Solution #2: 

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

	
////////////////////////////////////////////////////////////////////////////////


//Counting Sheep (Kata - 8)
	
//Instructions: Consider an array of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).

	
var array1 = [true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true ];
	
//Solution #1: 
	
function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach(sheep => sheep === true ? count++ : null)
  return count
}

//Solution #2: 

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}


////////////////////////////////////////////////////////////////////////////////
	
	
//Jenny's Secret Message (Kata - 8)
	
//Instructions: Jenny has written a function that returns a greeting for a user. 
//However, she's in love with Johnny, and would like to greet him slightly different. 
//She added a special case to her function, but she made a mistake. Can you help her?

function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny"){
    return "Hello, my love!";
  }
}
	
	
//Solution #1: 
function greet(name){
  if(name === "Johnny"){
    return "Hello, my love!";
  }
  return "Hello, " + name + "!";
}
	
	
////////////////////////////////////////////////////////////////////////////////


//Needle in Haystack (Kata - 8)
	
//Instructions: Can you find the needle in the haystack?
//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found 

//Solution #1: 
	
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`
}
	

////////////////////////////////////////////////////////////////////////////////
	
	
//Keep Hydrated (Kata - 8)
	
//Instructions: Nathan loves cycling.
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

//EX:
//time = 3 ----> litres = 1
//time = 6.7---> litres = 3
//time = 11.8--> litres = 5

//Solution #1: 

function litres(time) {
  return Math.floor(time * 0.5);
}
	
	
////////////////////////////////////////////////////////////////////////////////


//Playing Banjo? (Kata - 8)
	
//Instructions: Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!
//The function takes a name as its only argument, and returns one of the following strings:
//name + " plays banjo" 
//name + " does not play banjo"

//Solution #1: 
	
function areYouPlayingBanjo(name) {
  return name.toLowerCase().startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`
}
	

////////////////////////////////////////////////////////////////////////////////
	
	
//Abbreviate Name (Kata - 8)
	
//Instructions: Write a function to convert a name into initials. 
//This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot seperating them.
//It should look like this: Sam Harris => S.H

//Solution #1: 
		
function abbrevName(name){
  const abbArr = name.split(' ').map(word => word[0].toUpperCase())
  abbArr.splice(1,0,'.')
  return abbArr.join('')
}
	
	
////////////////////////////////////////////////////////////////////////////////


//Century from Year (Kata - 8)
	
//Instructions: Given a year, return the century it is in.
//The first century spans from the year 1 up to and including the year 100, 
//The second - from the year 101 up to and including the year 200, etc.

//Solution #1: 
	
function century(year) {
    return Math.ceil(year/100);
}
	

////////////////////////////////////////////////////////////////////////////////
	
	
//Feasts of Many Beasts (Kata - 8)
	
//Instructions: All of the animals are having a feast! Each animal is bringing one dish. 
//There is just one rule: the dish must start and end with the same letters as the animal's name. 
//For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
//Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
//beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

//Solution #1: 
		
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}
	
	
////////////////////////////////////////////////////////////////////////////////


//DNA to RNA Conversion (Kata - 8)
	
//Instructions: Create a funciton which translates a given DNA string into RNA
//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. 
//It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
//RNA differs slightly from DNA its chemical structure and contains no Thymine. 
//In RNA Thymine is replaced by another nucleic acid Uracil ('U').


//Solution #1: 
	
function DNAtoRNA(dna){
  return dna.split("").map(base => {
    return base.replace("T","U")
  }).join("")
}
	
//Solution #2: 

function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}
	

////////////////////////////////////////////////////////////////////////////////
	
	
//Transportation on Vacation (Kata - 8)
	
//Instructions: After a hard quarter in the office you decide to get some rest on a vacation. 
//So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//You will need a rental car in order for you to get around in your vacation. 
//The manager of the car rental makes you some good offers.
//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
//Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//Write a code that gives out the total amount for different days(d).

//Solution #1: 

function rentalCarCost(d) {
  let cost = 40 * d
  if(d >= 3 && d <= 6){
    cost -= 20
  } else if(d >= 7){
    cost -= 50
  }
  return cost
}
	
	
////////////////////////////////////////////////////////////////////////////////


//Rock Paper Scissors (Kata - 8)
	
//Instructions: Let's play! You have to return which player won! In case of a draw return Draw!.

//Solution #1: 
	
const rps = (p1, p2) => {
    if(p1 === p2){
        return 'Draw!'
    } else if((p1 === 'scissors' && p2 === 'paper') || (p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock')){
        return 'Player 1 won!'
    } else {
        return 'Player 2 won!'
    }
}
	

////////////////////////////////////////////////////////////////////////////////
	
	
//Mumbling (Kata - 7)
	
//Instructions: This time no story, no theory. The examples below show you how to write function accum:
//The parameter of accum is a string which includes only letters from a..z and A..Z.
//EX: 
	//accum("abcd") -> "A-Bb-Ccc-Dddd"
	//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

//Solution #1: 
		
function accum(s) {
  return s.split('').map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i)).join('-')
}

//Solution #2: 

function accum(s) {
  var array = [];
  for (i = 0; i < (s.length); i++) {
    array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
  };
  return array.join("-");
}
	
	
////////////////////////////////////////////////////////////////////////////////


//Get the Middle (Kata - 7)
	
//Instructions: You are going to be given a word. Your job is to return the middle character of the word. 
//If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//Solution #1: 
	
function getMiddle(s){
 return s.length % 2 === 0 ? s[s.length/2 - 1] + s[s.length/2] : s[Math.ceil(s.length/2)]
}
	

////////////////////////////////////////////////////////////////////////////////
	
	
//Highest and Lowest Numbers (Kata - 7)
	
//Instructions: You are given a string of space separated numbers, and have to return the highest and lowest number.
//All numbers are valid Int32, no need to validate them.
//There will always be at least one number in the input string.
//Output string must be two numbers separated by a single space, and highest number is first.
//EX: highAndLow("1 2 3 4 5");  // return "5 1"

//Solution #1: 
	
function highAndLow(numbers){
  return [Math.max(...numbers.split(' ')), ' ', Math.min(...numbers.split(' '))].join('')
}

//Solution #1: 

function highAndLow(numbers){
  var arr = numbers.split(' ').sort((a, b) => a - b);
  return arr[arr.length -1] + ' ' + arr[0];
}
	
////////////////////////////////////////////////////////////////////////////////


//Shortest Word (Kata - 7)
	
//Instructions: Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

//Solution #1: 
	
function findShort(s){
  let shortest = 1000;
  s.split(' ').forEach(word => {
    if(word.length < shortest){
      shortest = word.length
    }
  })
  return shortest
}
	
//Solution #2: 

function findShort(str){
    return Math.min(...str.split(" ").map(word => word.length));
}

//Solution #3: 
	
function findShort(str){
  return str.split(' ').sort((a, b) => a.length - b.length)[0].length || 0;
}

//Solution #4: 

function findShort(s){
  return str.split(' ').map(a => a.length).reduce((a, b) => Math.min(a, b))
}
	

////////////////////////////////////////////////////////////////////////////////
	
	
//Descending Order (Kata - 7)
	
//Instructions: Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. 
//Essentially, rearrange the digits to create the highest possible number.
//Example: Input: 21445 Output: 54421

//Solution #1: 
		
function descendingOrder(n){
  return Number(n.toString().split('').sort().reverse().join(''))
}
	
	
////////////////////////////////////////////////////////////////////////////////


//Complementary DNA (Kata - 7)
	
//Instructions: Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. 
//EX: DNAStrand ("ATTGC") // return "TAACG"

//Solution #1: 

function DNAStrand(dna){
  let newDNA = ''
  dna.split("").forEach(char => {
    if(char === "A"){
      newDNA += "T"
    } else if(char === "T"){
      newDNA += "A"
    } else if(char === "C"){
      newDNA += "G"
    } else if(char === "G"){
      newDNA += "C"
    }
  })
  return newDNA
}
	
//Solution #2: 
	
function DNAStrand(dna){
  return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}
	
//Solution #3: 
	
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(char => pairs[char]).join('');
}


////////////////////////////////////////////////////////////////////////////////
	
	
//Xs and Os (Kata - 7)
	
//Instructions: Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. The string can contain any char.

//Solution #1: 
		
function XO(str) {
  let xs = str.toLowerCase().split('').filter(char => char === 'x').length
  let os = str.toLowerCase().split('').filter(char => char === 'o').length
  return xs === os
}
	
//Solution #2: 
	
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

	
////////////////////////////////////////////////////////////////////////////////


//Square Every Digit (Kata - 7)
	
//Instructions: square every digit of a number.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//Note: The function accepts an integer and returns an integer

//Solution #1: 
	
function squareDigits(num){
  let sqStr = ''
  num.toString().split('').forEach(n => sqStr += Math.pow(n, 2).toString())
  return Number(sqStr)
}
	
//Solution #2: 

function squareDigits(num){
  return Number(num.toString().split('').map(val => val * val).join(''));
  
}
	

////////////////////////////////////////////////////////////////////////////////
	
	
//Sum of Positive (Kata - 7)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
		
	
	
////////////////////////////////////////////////////////////////////////////////


//Sum of Positive (Kata - 7)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	
	
//Sum of Positive (Kata - 7)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
		
	
	
////////////////////////////////////////////////////////////////////////////////


//Sum of Positive (Kata - 7)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	
	
//Sum of Positive (Kata - 7)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
		
	
	
////////////////////////////////////////////////////////////////////////////////


//Sum of Positive (Kata - 7)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	
	
	
	
	
////////////////////////////////////////////////////////////////////////////////

//Highest Scoring Word (Kata - 6)
	
//Instructions:Given a string of words, you need to find and return the highest scoring word.
	//Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
	//You need to return the highest scoring word as a string.
	//If two words score the same, return the word that appears earliest in the original string.
	//All letters will be lowercase and all inputs will be valid.

//Solution #1:

function highestScoringWord(str){
  let words = str.split(' ');
  let highestWord ='';
  let highestCount = 0;
	
  for (let i = 0; i < words.length; i++) {
    let currHighest = 0;
    for (let j = 0; j < words[i].length; j++) {
      currHighest += words[i][j].codePointAt() - 96;
    }
	  
    if (currHighest > highestCount) {
      highestCount = currHighest;
      highestWord = words[i]
    }
  }
  return highestWord
}
	

//Solution #2: 

function highestScoringWord(str){
  var arr = str.split(' ');
  var str = 'abcdefghijklmnopqrstuvwxyz';

  var newArr = arr.map(word => {
    var sum = 0;
    for (var i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i]);
    }
    return sum;
  });
	
  return arr[newArr.indexOf(Math.max(...newArr))];
}



////////////////////////////////////////////////////////////////////////////////
	
//Find Odd Int (Kata - 6)
	
//Instructions: Given an array, find the int that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

//Solution #1: 
	
function findOdd(A) {
  const intObj = {};
  let oddInt = 0;

  A.forEach(item => intObj[item] ? intObj[item] += 1 : intObj[item] = 1)

  for(let int in intObj){
    if(intObj[int] % 2 !== 0){
      oddInt = Number(int)
    }
  }
  return oddInt
}
	
	
////////////////////////////////////////////////////////////////////////////////


//Multiples of 3 or 5 (Kata - 6)
	
//Instructions: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//Note: If the number is a multiple of both 3 and 5, only count it once.

//Solution #1: 
	
function solution(number){
  let sum = 0;
  for(let i = 0; i < number; i++){
    if(i % 3 === 0 && i % 5 === 0 ){
      sum += i
    } else if(i % 3 === 0){
      sum += i
    } else if(i % 5 === 0){
      sum += i
    }
  }
  return sum
}

//Solution #2: 

function solution(number){
  var sum = 0;
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

	
////////////////////////////////////////////////////////////////////////////////


//Find Parity Outlier (Kata - 6)
	
//Instructions: You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
//Write a method that takes the array as an argument and returns this "outlier" N.

//Solution #1: 

function findOutlier(integers){
  let oddCount = 0; 
  let evenCount = 0; 
  let oddNum; 
  let evenNum; 
  let outlierType; 

  integers.forEach((int, i) => {
    if(oddCount === 1 && evenCount === 1){
      outlierType = int % 2 === 0 ? 'odd' : 'even'
      return
    }
    if(int % 2 === 0 && evenCount === 0){
      evenCount++
      evenNum = int
    }
    if(int % 2 !== 0 && oddCount === 0){
      oddCount++
      oddNum = int
    }
    if(i === integers.indexOf(integers[integers.length - 1])){
      outlierType = int % 2 === 0 ? 'even' : 'odd'
    }
  })
  return outlierType === 'odd' ? oddNum : evenNum
}
	
//Solution #2: 
	
function findOutlier(integers){
  const even = integers.filter(int => int % 2 === 0);
  const odd  = integers.filter(int => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}
	


////////////////////////////////////////////////////////////////////////////////
	

//Equal Sides of Array (Kata - 6)
	
//Instructions: You are going to be given an array of integers. 
//Take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
//If there is no index that would make this happen, return -1.

//Solution #1: 
	
function findEvenIndex(arr){
  let index = -1;
  let left = 0;
  let right = 0;
  arr.forEach((num, i) => {
      arr.forEach((n, j) => {
          if(j < i){
            left += n
          } else if (j > i){
            right += n
          }
      })
      console.log(left, ' || ', right)
      if(left === right){
          index = i
          return
      } else {
        left = 0
        right = 0
      }
  })
  return index
}
	
//Solution #2: 
	
function findEvenIndex(arr){
  for(var i = 1; i < arr.length - 1; i++) {
    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
      return i;
    }
  }
  return -1;
}

////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////
	

//Sum of Positive (Kata - 6)
	
//Instructions: You get an array of numbers, return the sum of all of the positives ones.

//Solution #1: 
	


////////////////////////////////////////////////////////////////////////////////

	
//Directions Reduction (Kata - 5)
	
//Instructions: Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
//EX: ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]
	//"NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" 
	//So the whole path is reducible to ["WEST", "WEST"].

//Solution #1: 
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}

//Solution #2:	
function dirReduc(arr){
  var newArray = [];
  var obj = {NORTH: 'SOUTH', SOUTH: 'NORTH', EAST: 'WEST', WEST: 'EAST'};
  var change = false;
  
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== arr[i + 1]) {
      newArray.push(arr[i]);
    } else {
      change = true;
      i++;
    }
  }
  if (change === true) {
    return dirReduc(newArray);
  } else {
    return newArray;
  }

	
////////////////////////////////////////////////////////////////////////////////

	
//Next Bigger Number (Kata - 4)
	
//Instructions: You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits
//If no bigger number can be composed using those digits, return -1

//Solution #1: 	
	
function nextBigger(n){
  var d = n.toString().split('');
  
  // find the pivot, the point (from right) where i > i-1
  var p = -1;
  for (var i = d.length-1; i > 0; i--) {
    if (+d[i] > +d[i-1]) {
      p = i-1;
      break;
    }
  }
  
  // if we are unable to find the pivot, skip
  if (p == -1) return p;
    
  // splice the digits in the pivot
  var right = d.splice(p);
  
  // extract pivot
  var pv = right.splice(0, 1)[0];
  
  // find the lowest number > pv
  var mm = null, mmi = null;
  for (var i = 0; i < right.length; i++) {
    if (right[i] > pv) {
      if (mm == null || right[i] < mm) {
        mm = right[i];
        mmi = i;
      }
    }
  }

  if (mmi == null) return -1;
  
  right.splice(mmi, 1);
  right.push(pv);
  right = right.sort();
  
  // concat the left + new pivot + right part
  var ret = +d.concat([mm]).concat(right).join('');
  if (ret < n) return -1;
  
  return ret;
}
	
//solution #2
	
function nextBigger(n) {
  if (n === reverseSortDigits(n)) return -1

  let nSorted = sortDigits(n)
  
  while (true) {
    n += 1
    if (sortDigits(n) === nSorted) return n
  }
}

function splitDigits(d) {
  return String(d).split('')
}

function sortDigits(d) {
  return Number(splitDigits(d).sort().join(''))
}

function reverseSortDigits(d) {
  return Number(splitDigits(d).sort().reverse().join(''))
}
	
//solution #3

function nextBigger(n){
   let a = +String(n).split('').sort((a,b) => b-a).join('');
   
  for (let i = n + 1; i <= a; i++) {
    if (a == +String(i).split('').sort((a,b) => b-a).join('')) return i
  }
  return -1
}
