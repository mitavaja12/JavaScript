const isArraySorted = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
};

console.log(isArraySorted([1, 2, 3, 4, 5]));
console.log(isArraySorted([5, 3, 4, 1, 2]));
