// No usar Array.prototype.sort method.

function bubbleSort(array) {
  // Only change code below this line
  let keepIterating = true;

  function iteration() {
    let iterationsWholeLoop = 0;

    array.forEach((elem, idx) => {
      if (elem > array[idx + 1] && idx < array.length - 1) {
        const charToEnd = array.splice(idx, 1);
        array.push(...charToEnd);
        iterationsWholeLoop++;
      }
    });

    if (iterationsWholeLoop === 0) {
      keepIterating = false;
    }
  }

  while (keepIterating === true) {
    iteration();
  }

  console.log(array);
  return array;
  // Only change code above this line
}

bubbleSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
]);
