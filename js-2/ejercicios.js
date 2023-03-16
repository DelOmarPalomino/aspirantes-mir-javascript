function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function max(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function maxIndex(arr) {
    if (arr.length === 0) {
        return -1;
    }
    let max = arr[0];
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

function join(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i < arr.length - 1) {
            str += " ";
        }
    }
    return str;
}


console.log(join([1, 3, 2])) // 1