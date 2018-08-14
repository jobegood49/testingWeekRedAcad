module.exports = (start, end, ln) => {
  if ( start === end)
    return 0
  else if ( start > end )
    return 0
  else if ( end < start)
   return 0
   else if ( ln < 0)
   return 0
  else
    return Math.ceil(Math.abs(end - start) / ln);
};
