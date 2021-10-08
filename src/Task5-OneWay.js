// Question 5

console.log("Implementation For One Way");

const oneWay = (str1, str2) => {
  let m = str1.length;
  let n = str2.length;

  if (Math.abs(m - n) > 1) {
    return false;
  }
  let count = 0;
  let i = 0;
  j = 0;

  while (i < m && j < n) {
    if (str2[i] != str2[j]) {
      if (count == 1) {
        return false;
      }
      if (m > n) {
        i++;
      } else if (m < n) {
        j++;
      } else {
        i++;
        j++;
      }
      count++;
    } else {
      i++;
      j++;
    }
  }

  if (i < m || j < n) {
    count++;
  }
  return count == 1;
};

console.log(oneWay("pale", "ple"));
console.log(oneWay("pales", "pale"));
console.log(oneWay("pale", "bale"));
console.log(oneWay("pale", "bake"));