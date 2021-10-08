// Question 2

console.log("Implementation for Check Permutation");

const checkPermutaton = (firstString, secondString) => {
  let firstNum = firstString.length;
  let secondNum = secondString.length;

  if (firstNum != secondNum) {
    return false;
  }

  let initialCharacter = firstString.split(" ");
  let finalCharacter = secondString.split(" ");

  let new1 = initialCharacter.sort();
  let new2 = finalCharacter.sort();

  for (let i = 0; i < firstNum; i++) {
    if (new1[i] != new2[i]) {
      return false;
    }
    return true;
  }
};

console.log(checkPermutaton("test", "ttew"));
console.log(checkPermutaton("abcd", "dabc"));