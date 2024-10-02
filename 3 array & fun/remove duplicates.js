let originalArray = [1, 2, 2, 3, 4, 4, 5];
let distinctArray = [];

for (let i = 0; i < originalArray.length; i++) {
    let foundDuplicate = false;
    for (let j = 0; j < distinctArray.length; j++) {
        if (originalArray[i] === distinctArray[j]) {
            foundDuplicate = true;
        }
    }
    if (!foundDuplicate) {
        distinctArray.push(originalArray[i]);
    }
}

console.log(distinctArray);
