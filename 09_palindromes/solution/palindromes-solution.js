const palindromes = function (string) {
  const palindromeString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return palindromeString.split("").reverse().join("") == palindromeString;
};

module.exports = palindromes;
