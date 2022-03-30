function checkSet(arrToBeSet, checkValue) {
  // Only change code below this line
  const set = new Set(arrToBeSet);
  const hasValue = set.has(checkValue);
  const size = set.size;
  return [hasValue, size];
  // Only change code above this line
}

checkSet([4, 5, 6], 3);
