let array = [1, 3, 5, 7, 9];
function traVitri(arr, index) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (index == arr[i]) {
            result += i;

        }
        if (result.length !== 0) {
            result = "không có giá trị nào trong mảng";
        }
    }
    return result;
}

let index = +prompt("nhập vào vị trí cần tìm : ");
document.write("số cần tìm ở vị trí thứ : " + traVitri(array, index));
