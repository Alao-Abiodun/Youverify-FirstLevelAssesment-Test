// Question 6

console.log("Implementation For String Compression");

const stringCompression = (str) => {
  let charMap = new Map();

  for (let i = 0; i < str.length; i++) {
    charMap.set(str[i], charMap.get(str[i]) + 1 || 1);
  }

  let result = "";
  charMap.forEach((value, index) => {
    result += index + value;
  });
  return result;
};

console.log(stringCompression("aaabbccccaa"));
