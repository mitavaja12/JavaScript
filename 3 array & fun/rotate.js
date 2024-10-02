let arr = [1, 2, 3, 4, 5];
let positions = 2;

let endSlice = arr.slice(-positions % arr.length);
let startSlice = arr.slice(0, arr.length - positions % arr.length);

let rotatedArray = endSlice.concat(startSlice);

console.log(rotatedArray);