/*
In this technique, the given array is divided in two parts. Sorted sublist and Unsorted sublist.
We take one value of Unsorted sublist and identify a appropriate place for that value in the sorted sublist.
After finding the appropriate place in sorted sublist, we will insert that value in sorted sublist.
Initially, arr[i] is sorted sublist and from arr[i+1] till the end of an array is Unsorted sublist.
*/

const list = [5, 4, 10, 1, 6, 2];

function insertionSort(arr) {
  var temp = null;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    let j = i - 1;
    while (i >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp
  }
  return arr;
}

console.log(insertionSort(list))

/*Time complexicity in worst case, when an array is given in decending order 
and you have to sort that array in ascending order, in that case the time 
complexicity will be O(n2) - order of Nsquare.
Best case the time complexicity will be O(n) - order of n. When array is 
already in ascending order.*/
