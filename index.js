/*
// #1 fizzbuzz
var arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
    console.log("fizzBuzz");
  } else if (arr[i] % 3 == 0) {
    console.log("fizz");
  } else if (arr[i] % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(arr[i]);
  }
}

// #2 Reverse a String

// using built-in method
function reverseStringBm(str) {
  return str.split("").reverse().join("");
}

// using for loop
function reverseStringFl(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseStringBm("hello"));
console.log(reverseStringFl("abcdefg"));

// #3 Check Prime Number

function isPrime(num) {
  for (var i = 2; i <= num; i++) {
    if (num % i == 0) {
      return false;
    } 
  }
  return true;
}


for (var j = 2; j <= 100; j++) {
  if (isPrime(j)) {
    console.log("Prime", j);
  } else {
    console.log("Not Prime", j);
}
}

// #4 Find the Largest Number in an Array
function findLargeNuminArray(arr = []) {
  var temp = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] >= temp) {
      temp = arr[i];
    }
  }
  return temp;
}

console.log(findLargeNuminArray([5, 5, 5, 5, 5, 5]));
console.log(findLargeNuminArray([10, 23, 45, 67, 77, 43, 22, 1]));

// #5 Reverse Array
function reverseArray(arr = []) {
  let resArray = [];
  let j = 0;
  for (var i = arr.length - 1; i >= 0; --i) {
    // resArray.push(arr[i]);
    resArray[j] = arr[i];
    j++;
  }
  return resArray;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));

// #6 Palindrome Checker
function palindromeChecker(str = "") {
  let reverseStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  if (str.toLowerCase() === reverseStr.toLowerCase()) {
    return reverseStr + " " + "Palindrome";
  }
  return "Not Palindrome";
}

console.log(palindromeChecker("abcdef"));
console.log(palindromeChecker("maAm"));

// #7 Factorial of a Number
function factorialofANumber(num) {
  let factorial = 1;
  if(num == 0){
    return factorial
  }
  for (var i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial
}

console.log(factorialofANumber(5))

// #8 Second Largest Number in an Array
function secondLargestNumberinArray(arr = []) {
  var largeNum1 = -Infinity;
  var largeNum2 = -Infinity;
  // first find largest num
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largeNum1) {
      largeNum1 = arr[i];
    }
  }
  // find second largest num
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largeNum2 && largeNum2 < largeNum1) {
      if (arr[i] == largeNum1) {
        continue;
      }
      largeNum2 = arr[i];
    }
  }
  
  return largeNum2;
}
console.log(secondLargestNumberinArray([10, 63, 33, 44, 55, 66, 34, 11]));

// #9 Fibonacci Sequence
function fibonacciSequence(num) {
  if (num === 0) return [];
  if (num === 1) return [0];
  var a = 0;
  var b = 1;
  let fbNSArr = [a, b];
  for (var i = 3; i <= num; i++) {
    var temp;
    temp = a + b;
    a = b;
    b = temp;
    fbNSArr.push(temp);
  }
  return fbNSArr;
}

console.log(fibonacciSequence(0));
console.log(fibonacciSequence(1));
console.log(fibonacciSequence(10));

// #10 Count Vowels in a String
function countVowelsInString(str) {
  let strLC = str.toLowerCase();
  var vowels = ["a", "e", "i", "o", "u"];
  var vowelsInStr = [];
  for (var i = 0; i < strLC.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (strLC[i] === vowels[j]) {
        vowelsInStr.push(strLC[i]);
      }
    }
  }
  return {
    amount: vowelsInStr.length,
    vowelsInStr,
  };
}

console.log(countVowelsInString("abcdifuO"));
*/

// #11 Longest Word in a String
function longestWordInString(str) {
  let stringArray = str.split(" ");
  var longestStr = stringArray[0].length;
  console.log(stringArray[0].length);
  console.log(stringArray.length);
  var str = longestStr;
  for (var i = 0; i < stringArray.length - 1; i++) {
    if (stringArray[i].length >= longestStr) longestStr = stringArray[i].length;
  }
  return stringArray[longestStr];
}

console.log(longestWordInString("I am Arsalan"));
