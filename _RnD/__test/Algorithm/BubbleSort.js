const list = [15, 5, 20, 35, 2, 42, 67, 17]

//n = 8; no. of elements in an array
// In bubble sorting a[i] is compared with a[i+1], and if these two elements are in wrong order then we have to swap those elements. If the elements are in correct order then no swapping will be done.

function bubbleSortArray(arr) {
  var temp = null;
  var flag = null;
  for (var x = 0; x < arr.length - 1; x++) {
    flag = 0;
    for (var y = 0; y < arr.length - 1 - x; y++) {
      if (arr[y] > arr[y + 1]) {
        temp = arr[y];
        arr[y] = arr[y + 1];
        arr[y + 1] = temp;
        flag = 1
      }
    }
    if (flag === 0) {
      break;
    }
  }
  return arr
}

console.log(bubbleSortArray(list))
//[ 2, 5, 15, 17, 20, 35, 42, 67]

// How to find out time complexicity, we have to check how many for loops are there.
//Eg 2. Then, to find out the time complexicity you have to check how many calculations are there,
//how many computations are there within the inner for loop.
//Best case is array is already sorted, (O(n) - order of n)
// Worst complexicity the time complexicity will be (O(n^2) - Order of Nsquare)

