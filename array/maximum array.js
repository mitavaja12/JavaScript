var arr = [2, 3, 4, 5, 6, 9, 10, 3];

var max = arr[0];

for (var i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);
 