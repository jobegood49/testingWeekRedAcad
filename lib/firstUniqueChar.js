module.exports = str => {
  firstUnique = "";
  uniqueStr = String.prototype.concat(...new Set(str));
  console.log(uniqueStr);
  for (i = 0; i < str.length; i++) {
    if (
      str[i - 1] != str[i] &&
      str[i] != str[i + 1] &&
      firstUnique === "" &&
      uniqueStr.includes(str[i])
    ) {
      firstUnique = str[i];
    }
  }

  if (str === "") return 0;
  else if (firstUnique === "") return undefined;
  else {
    return firstUnique;
  }
};
