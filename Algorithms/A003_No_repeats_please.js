function extractPerms(sourceArr) {
  const permutaciones = [];
  const permute = (arr, permutacion = []) => {
    if (arr.length === 0) {
      permutaciones.push(permutacion);
      return;
    }

    for (let i in arr) {
      const curr = arr.slice();
      const next = curr.splice(i, 1);

      permute(curr, [...permutacion, ...next]);
    }
  };
  permute(sourceArr);

  return permutaciones;
}

function permAlone(str) {
  const sourceArr = str.split('');
  const permsArr = extractPerms(sourceArr).map(elem => elem.join(''));
  let count = 0;
  permsArr.forEach(word => {
    const regex = /([a-z])\1/gi;
    if (!regex.test(word)) count++;
  });

  console.log(count);
  return count;
}

permAlone('aac'); //Should return 2
