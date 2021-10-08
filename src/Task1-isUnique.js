// Question 1

console.log("Implementation for Is Unique");

const isUnique = (inputString) => {
  let hash = new Set();
  for (let i = 0; i < inputString.length; i++) {
    const el = inputString[i];
    if (hash.has(el)) {
      return false;
    }
    hash.add(el);
  }
  return true;
};

console.log(isUnique("abca"));
console.log(isUnique("abc"));