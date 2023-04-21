function reverse(word) {
  let wordArray = word.split("");
  let reversedWordArray = wordArray.reverse()
  let reversedWord = reversedWordArray.join("")
  return reversedWord
}


function isPalindrome(word) {
  const reversedWord = reverse(word)
  if (word === reversedWord) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  make a function that returns true if a word is a palindrome and false if it's not.
  that means if the word is the same as the word in reverse, I should return true.


  mom === mom // true
  abc === cba // false


  reverse the string
  check if the input is the same as the reverse input
    return true
   else
    return false

 function isPalindrome(word) {
  const reversedWord = reverse(word)
  if (word === reversedWord) {
    return true
  } else {
  return false
  }
}
*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
