const list = [36, 25, 15, 63, 15, 29, 8, 56, 29];
// Use bubble sort method
function sortArray(arr) {
  var temp = null;
  for (var x = 0; x < arr.length - 1; x++) {
    for (var y = 0; y < arr.length - 1 - x; y++) {
      if (arr[y] > arr[y + 1]) {
        temp = arr[y];
        arr[y] = arr[y + 1];
        arr[y + 1] = temp;
      }
    }
  }
  return arr
}

const sortedArray = sortArray(list)
// [8, 15, 15, 25, 29, 29, 36, 56, 63]

function removeDuplicates(arr) {
  let result = [];
  result[0] = arr[0];
  let y = 1;
  for (let x = 1; x < arr.length; x++) {
    if (arr[x] != arr[x - 1]) {
      result[y] = arr[x];
      y++;
    }
  }
  return result;
}

const filteredArray = removeDuplicates(sortedArray)
console.log(filteredArray)