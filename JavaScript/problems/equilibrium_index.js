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
  for (let i = 1; i < arr.length; i++) {
    let higher_indexes_sum = 0;
    let lower_indexes_sum = 0;
    for (let j = 0; j < i; j++) {
      lower_indexes_sum = lower_indexes_sum + arr[j];
    }
    for (let k = arr.length - 1; k > i; k--) {
      higher_indexes_sum = higher_indexes_sum + arr[k];
    }
    if (lower_indexes_sum !== 0 && lower_indexes_sum === higher_indexes_sum) {
      return i;
    }
  }
  return -1;
};

console.log("Output: ", getEquilibriumIndex(arr));
