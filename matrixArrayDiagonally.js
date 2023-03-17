const matrixDiagRead = (arr) => {
  //first half part of the arr triangle loop
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    const newArr = [];
    //suppose the index need to locate from arr is x and y
    //seems like the y = i - x
    //and first x in loop always equal to 0
    for (let x = 0; x <= i; x++) {
      newArr.push(arr[x][i - x]);
    }
    results.push(newArr);
  }

  //next half part of the trangle loop
  for (let i = arr.length - 1; i >= 1; i--) {
    const newArr = [];
    //suppose the index need to locate from arr is x and y
    //seems like the first y is always equal the last index of arr
    //and arr.length * 2 - i - 1 = x + y
    //times of loop need: arr.length - i
    for (let y = arr.length - 1; y >= arr.length - i; y--) {
      newArr.push(arr[arr.length * 2 - i - y - 1][y]);
    }
    results.push(newArr);
  }

  return results;
};

const test = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S']
];

console.log(matrixDiagRead(test));
