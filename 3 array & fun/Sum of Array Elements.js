let sum_of_array = [1, 2, 3, 4, 5];

let sum = 0;

let n = sum_of_array.length;

for (let i = 0; i < n; i++) {
    sum += sum_of_array[i];
}

console.log(sum);
