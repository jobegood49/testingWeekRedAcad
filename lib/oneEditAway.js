// The length difference between two input strings should not be more than 1.
// When the length of the strings is same, the number of different chars should not be more than 1.
// If the length difference is 1, then either one char can be inserted in the short string or deleted
// from the longer string. Considering that, the number of different char should not be more than 1.

module.exports = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) return false;

  if (str1.length === str2.length) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] != str2[i]) {
        console.log(count);
        count++;
      }
    }
    if (count > 1) return false
    else return true
  }

  let diff = 0;
  let i = 0;
  let j = 0;
  while (i < str1.length && j < str2.length) {
    let first = str1.charAt(i);
    let second = str2.charAt(j);
    if (first != second) {
      diff++;
      if (str1.length < str2.length) {
        j++;
      }
      if (str2.length < str1.length) {
        i++;
      }
    } else {
      i++;
      j++;
    }
    if (diff > 1) {
      return false;
    }
  }

  return true
};

