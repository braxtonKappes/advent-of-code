function calculateTotalDistanceWithIndices(leftList, rightList) {

  const leftWithIndices = leftList.map((value, index) => [value, index]);
  const rightWithIndices = rightList.map((value, index) => [value, index]);

  console.log(leftWithIndices, rightWithIndices);

  leftWithIndices.sort((a, b) => a[0] - b[0]);
  rightWithIndices.sort((a, b) => a[0] - b[0]);

  let totalDistance = 0;
  for (let i = 0; i < leftWithIndices.length; i++) {
      const leftIndex = leftWithIndices[i][1];
      const rightIndex = rightWithIndices[i][1];
      totalDistance += Math.abs(leftIndex - rightIndex);
  }

  return totalDistance;
}

// Examples
const leftList = [10, 2, 15, 22, 1, 30, 7, 8, 18, 25];
const rightList = [35, 3, 20, 24, 9, 2, 5, 11, 19, 28];

console.log(calculateTotalDistanceWithIndices(leftList, rightList));
