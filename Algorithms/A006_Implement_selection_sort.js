// No usar Array.prototype.sort method.

function selectionSort(array) {
  // Only change code below this line
  for (let i in array) {
    let min = null;
    let minIdx = null;

    for (let j = i; j < array.length; j++) {
      if (min === null || array[j] < min) {
        min = array[j];
        minIdx = j;
      }
    }

    array.splice(minIdx, 1);
    array.splice(i, 0, min);
  }

  console.log(array);
  return array;
  // Only change code above this line
}

selectionSort([5, 4, 8, 6, 1, 3]);
