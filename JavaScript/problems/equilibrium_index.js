/*
Write a function that returns an equilibrium index or -1 if it doesn’t exist, equilibrium index is the index such that the sum of the elements of the lower indexes is equal to the sum of the elements of the higher indexes.

Example:
Input = [0, 8, 7, 5, 6, -3]
Output = 2

Input = [4, 7, -3, 0, 0, 0, 7, 8]
Output = 6
*/

const arr = [4, 7, -3, 0, 0, 0, 7, 8];

const getEquilibriumIndex = (arr) => {
  let total_sum = 0;
  let left_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    total_sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    total_sum -= arr[i];
    if (left_sum === total_sum) {
      return i;
    }
    left_sum += arr[i];
  }
  return -1;
};

module.exports = getEquilibriumIndex;
