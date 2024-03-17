// Binary search always works in sorted array
// Here we divide the array in two halfs and search.
//Case 1: data === arr[midIndex]
//Case 2: data < arr[midIndex]
//Case 3: data > arr[midIndex]

// n: total no. of element in the array
//data: data you want to search
//l: left index
//r: right index
//mid: mid index

function binarySearch(arr, n, data) {
  let l = 0;
  let r = n - 1;
  // here we check if l <= r, if r > l, then ele does not exist, the return -1.
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (data === arr[mid]) {
      return mid;
    } else if (data < arr[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

const arr = [5, 9, 17, 23, 25, 45, 59, 63, 71, 89];
const data = 59;

console.log(binarySearch(arr, arr.length, 59));

// What is the time complexity of this algoritham?
// We are reducing the search space by half, in such case the time complexity will be, O(logn). and the base case will be, O(1) if the search data is 25.