let array = ["RED", "AND", "WHITE"];
let n = array.length

for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
        console.log(array[i].toUpperCase());
    }
    else {
        console.log(array[i].toLowerCase());
    }
}