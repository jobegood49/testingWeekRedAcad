// function getFrequency(str) {
//   return str.split("").reduce((prev, curr) => {
//     prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
//     return prev;
//   }, {});
// }

// console.log(getFrequency('testdsfsfd'))

// function charCount(str) {
//     return _(str.split('')).countBy(function(char) {
//         return char.toLowerCase();
//     });
// }

// charCount('aaabbbbdd')

// function freqMap(s) {
//   freq = {};
//   for (let c of s) freq[c] = -~freq[c];
//   return freq;
// }

// console.log(freqMap("testdsfsfd"));

// function letterFrequency(text) {
//   var count = {};
//   text.split("").forEach(function(s) {
//     count[s] ? count[s]++ : (count[s] = 1);
//   });
//   return count;
// }

// console.log(letterFrequency("testdsfsfd"));

// 1. Create an empty object.
// 2. For each letter in the text
//     2a. If the letter is not a property of the object then add it with value=1
//     2b. If the letter is already a property of the object increment the count
// 3. Return the object containing the letters and their frequencies

function freqMap(str) {
  let freq = {};
  str.split("").forEach(el => {
    if (freq.hasOwnProperty(el)) {
      freq[el] = +1;
    } else {
      freq[el] = 1;
    }
  });
  
  for (var property in freq) {
    if (freq[property] === 1) return property;
  }
}

console.log(freqMap("eestdsfsfd"));
