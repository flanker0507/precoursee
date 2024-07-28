function findNum(arr) {
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 9) {
            found = true;
            break;
        }
    }
    if (found) {
        console.log("ada angka 9");
    } else {
        console.log("tidak ada angka 9");
    }
}