module.exports = array => {
  let uniqueArray = [...new Set(array)];

  let sortedArray = uniqueArray.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i] > 0 && sortedArray[i + 1] != sortedArray[i] + 1) {
      return sortedArray[i] + 1;
    }
  }
  return uniqueArray[0] - 1;
};
