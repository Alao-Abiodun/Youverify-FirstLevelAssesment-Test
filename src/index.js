const studentCourseSelections = (inputString) => {
    const inputsValidation = /([a-zA-Z]+\d+)|([a-zA-Z]+\-\d+)|([a-zA-Z]+\s\d+)/g;
    const checkedInputs = inputString.replace(inputsValidation, 'CS 111');
    console.log(checkedInputs);
    const arr = checkedInputs.split(" ");
    console.log(arr);
    const stringArr = arr.map((string) => string);
    const resultObj = {
        'Department': stringArr[0],
        ['Course Number']: stringArr[1],
        'year': stringArr[2],
        'semester': stringArr[3],
    };
    return resultObj;
};

// console.log(studentCourseSelections("CS111 2016 Fall"));
console.log(studentCourseSelections("CS-111 Fall 2016"));
// console.log(studentCourseSelections("CS 111 F2016"));


