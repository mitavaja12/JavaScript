const N = 4; 
let evenSum = 0;
let oddSum = 0;

    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }

    if (evenSum > oddSum) {
        console.log("even");
    } else {
        console.log("odd");
    }