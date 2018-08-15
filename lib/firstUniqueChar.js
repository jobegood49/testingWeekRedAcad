module.exports = str => {
  //   firstUnique = "";
  //   uniqueStr = String.prototype.concat(...new Set(str));
  //   console.log(uniqueStr);
  //   for (i = 0; i < str.length; i++) {
  //     if (
  //       str[i - 1] != str[i] &&
  //       str[i] != str[i + 1] &&
  //       firstUnique === "" &&
  //       uniqueStr.includes(str[i])
  //     ) {
  //       firstUnique = str[i];
  //     }
  //   }

  //   if (str === "") return 0;
  //   else if (firstUnique === "") return undefined;
  //   else {
  //     return firstUnique;
  //   }
  if (typeof str !== "string" || !str || !str.length) return;

  const strArray = str.split("");
  console.log(strArray)
  for (let i = 0; i < strArray.length; i++) {
    const letter = strArray[i];
    shiftedArray = strArray.shift();
    console.log(strArray)
    console.log(strArray.includes(letter))
    if (!strArray.includes(letter)) {
      return letter;
    }
  }
};
