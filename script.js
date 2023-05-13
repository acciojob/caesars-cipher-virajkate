// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line
  // Split the input string into an array of characters.
  return str.split('')
    // Map each character to a decoded version using the rot13 algorithm.
    .map(function(char) {
      // Convert the character to its Unicode value.
      var c = char.charCodeAt(0);
      // If the character is not an uppercase letter, return it unchanged.
      if (c < 65 || c > 90) {
        return char;
      }
      // Otherwise, apply the rot13 algorithm to the character and return the result.
      else {
        return String.fromCharCode(((c - 65 + 13) % 26) + 65);
      }
    })
    // Join the array of characters back into a string.
    .join('');
  return ;//return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
