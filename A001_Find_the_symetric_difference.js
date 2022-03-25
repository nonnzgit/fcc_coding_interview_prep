function extractDif(x, y) {
  const comparationArr = [x, y];
  const sortedArr = comparationArr.sort((a, b) => a.length - b.length);
  const coincidenceNumsArr = sortedArr[0].filter(num =>
    sortedArr[1].includes(num)
  );

  const extendedComparationArr = [...x, ...y];

  const sliceSymDifDuplicates = extendedComparationArr.filter(
    num => !coincidenceNumsArr.includes(num)
  );
  const sliceSymDifNoDuplicates = [...new Set(sliceSymDifDuplicates)];
  return sliceSymDifNoDuplicates;
}

function sym(...args) {
  if (args.length < 2) {
    return;
  }
  let prevArr;
  for (let i = 1; i < args.length; i++) {
    if (i === 1) {
      prevArr = extractDif(args[i - 1], args[i]);
    }
    if (i > 1) {
      prevArr = extractDif(prevArr, args[i]);
    }
  }
  return prevArr;
}

sym([5, 2, 1, 4, 4], [1, 2, 3], [1, 5, 4, 2, 3], [1, 6]);
