//Question 3

console.log("Implementation for URLify");

const URLify = (input) => {
  const testCase = /[' ']/g;
  let result = input.replace(testCase, "%20");
  return result;
};

console.log(URLify("Mr John Smith"));