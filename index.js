function isPalindrome(word) {
  // Write your algorithm here
  let array = word.split("")
  let newWord = ''
  for (let n = (array.length) - 1; n >= 0; n--) {
    newWord += array[n]
  }
  if (newWord === word) {
    return true
  }
  else {
    return false
  }

}

/* 
  Add your pseudocode here
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
