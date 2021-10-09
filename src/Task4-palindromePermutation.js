// Question 4

console.log("Implementation For Palindrome Permutation");

const palindromePermutation = (str) => {
  const hash = {};
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c === "") {
      continue;
    }
    if (hash[c]) {
      delete hash[c];
    } else {
      hash[c] = true;
    }
    count++;
  }
  if (count % 2 === 0) {
    return Object.keys(hash).length === 0;
  } else {
    return Object.keys(hash).length === 1;
  }
};
console.log(palindromePermutation("amadm"));
