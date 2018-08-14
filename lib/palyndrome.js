module.exports = word => {
  if (word.length === 0) return false;
  else if (word.length === 1) return true;
  else if (word[0] === word[1]) return true;
  else if (word.split(" ").reverse().join("") === word) return true;
  else {
    let re = /[\W]/g;
    let lowRegStr = word.toLowerCase().replace(re, '')
    console.log(lowRegStr)
    let revRegStr = lowRegStr.split('').reverse().join('')
    console.log(revRegStr)

    return lowRegStr === revRegStr
  }
};

