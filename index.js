//FUNCTION MENCARI NILAI 9 DI ARRAY

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20];

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