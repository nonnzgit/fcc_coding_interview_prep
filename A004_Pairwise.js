function pairwise(arr, arg) {
  // Create object that stores index and value together.
  const idxArr = arr.map((value, idx) => idx);

  // Test conditions asked in the problem, if so, delete corresponding properties from object so you cant use it again.
  let result = 0;
  arr.forEach((firstNum, num1Idx) => {
    arr.forEach((secondNum, num2Idx) => {
      if (
        num1Idx != num2Idx &&
        firstNum + secondNum === arg &&
        idxArr.includes(num1Idx) &&
        idxArr.includes(num2Idx)
      ) {
        result += num1Idx + num2Idx;
        idxArr.splice(idxArr.indexOf(firstNum), 1);
        idxArr.splice(idxArr.indexOf(secondNum), 1);
      }
    });
  });
  return result;
}

pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([1, 4, 2, 3, 0, 5], 7);
pairwise([1, 1, 1], 2);
pairwise([1, 3, 2, 4], 4);
