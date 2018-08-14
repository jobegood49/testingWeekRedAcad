module.exports = str => {
  firstUnique = "";
  for (i = 0; i < str.length; i++) {
    if (str[i - 1] != str[i] && str[i] != str[i + 1] && firstUnique === "") {
      firstUnique = str[i];
    }
  }

  if (str === "") return 0;
  else if (firstUnique === "") return undefined;
  else {
    return firstUnique;
  }
};
