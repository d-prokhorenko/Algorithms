const arr = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,];
let count = 0;

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivotIdx = Math.floor(array.length / 2);
    const lessArr = [];
    const greaterArr = [];

    for (let i = 0; i < array.length; i++) {
        count++;
        if (i !== pivotIdx) {
            if (array[i] < array[pivotIdx]) {
                lessArr.push(array[i]);
            } else {
                greaterArr.push(array[i]);
            }
        }
    }

    return [...quickSort(lessArr), array[pivotIdx], ...quickSort(greaterArr)];
}

console.log(quickSort(arr));
console.log('count', count);
