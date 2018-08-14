module.exports = str => {
  if (str.length === 0) return false;
  else if(str.length === 1) return str + 1
  else {
    let uniqueStr = String.prototype.concat(...new Set(str));
    buffer = "";
    uniqueStr.split("").forEach(element => {
      let count = 0;
      str.split("").forEach(el => {
        if (el === element) count = count + 1;
      });
      buffer += element + count;
      console.log(buffer);
      
    });
    return buffer;
  }
};
