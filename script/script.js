var arr = [false, 12, '23424', false, 324, null, 5, 0, 0, 9, undefined, NaN, 6, 7];
var filteredArray = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== null && arr[i] !== 0 && arr[i] !== false && arr[i] !== undefined && !isNaN(arr[i])) {
        filteredArray.push(arr[i]);
    }
}

console.log(filteredArray);