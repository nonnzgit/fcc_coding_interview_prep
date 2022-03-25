function updateInventory(arr1, arr2) {
  const inventoryObj = {};
  arr1.forEach(elem => {
    inventoryObj[elem[1]] = elem[0];
  });
  const inventoryItemsArr = arr1.map(([qt, inv]) => inv);
  arr2.forEach((elem, idx) => {
    if (inventoryItemsArr.indexOf(elem[1]) === -1) {
      inventoryObj[elem[1]] = elem[0];
    } else {
      inventoryObj[elem[1]] = inventoryObj[elem[1]] + elem[0];
    }
  });

  const provResult = Object.entries(inventoryObj).map(([key, value]) => [
    value,
    key,
  ]);
  const mappedObj = Object.entries(inventoryObj).map(([key, value], idx) => [
    key.toLocaleLowerCase(),
    idx,
  ]);
  mappedObj.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    }
    if (a[0] < b[0]) {
      return -1;
    }
    return 0;
  });

  return mappedObj.map(elem => provResult[elem[1]]);
}

// Example inventory lists
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

updateInventory(curInv, newInv);

// Should return:
// [
//   [88, 'Bowling Ball'],
//   [2, 'Dirty Sock'],
//   [3, 'Hair Pin'],
//   [3, 'Half-Eaten Apple'],
//   [5, 'Microphone'],
//   [7, 'Toothpaste'],
// ];
