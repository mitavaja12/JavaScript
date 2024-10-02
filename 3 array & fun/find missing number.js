let arr = [1, 2, 4, 5, 6];

let n = arr.length + 1;

let Sum = n * (n + 1) / 2;

let array_sum = 0;
for (let i = 0; i < arr.length; i++) {
    array_sum += arr[i];
}

let missing_num = Sum - array_sum;

console.log(missing_num);